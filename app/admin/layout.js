"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import SignOutButton from "./components/SignOutButton";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/admin/login";
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [counts, setCounts] = useState({ contacts: 0 });

  const fetchCounts = async () => {
    try {
      // Fetch unread count
      const resC = await fetch("/api/admin/contacts?unread=true");
      const dataC = await resC.json();
      
      if (Array.isArray(dataC)) {
        setCounts({
          contacts: dataC.length 
        });
      }
    } catch (err) {
      console.error("[AdminAuth] Count fetch failed:", err);
    }
  };

  // Use a ref to always have the latest pathname in the subscription closure
  // without re-creating the subscription on every navigation
  const pathnameRef = useRef(pathname);
  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    let active = true;

    const checkUser = async () => {
      // If we're on the login page, just clear the loading state
      if (pathnameRef.current === "/admin/login") {
        setLoading(false);
        return;
      }

      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!active) return;

        if (!session) {
          router.push("/admin/login");
          return;
        }

        setLoading(false);
        fetchCounts();
      } catch (err) {
        if (active) {
          setLoading(false);
          router.push("/admin/login");
        }
      }
    };

    checkUser();

    // Subscribe ONCE. Use the ref to read the current path so we never need
    // to re-create this subscription when the user navigates between pages.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const currentPath = pathnameRef.current;
      if (event === 'SIGNED_IN' && currentPath === "/admin/login" && session) {
        router.push("/admin/contacts");
      }
      if (event === 'SIGNED_OUT') {
        router.push("/admin/login");
      }
    });

    window.addEventListener("registryUpdated", fetchCounts);

    return () => {
      active = false;
      subscription.unsubscribe();
      window.removeEventListener("registryUpdated", fetchCounts);
    };
  // Empty array = run ONCE on mount only. The ref keeps the closure fresh.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle mobile sidebar close on path change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  // If on login page, just show children
  if (isLoginPage) {
    return <div className="min-h-screen bg-surface">{children}</div>;
  }


  const navLinks = [
    { label: "Contact Inquiries", href: "/admin/contacts", icon: "mail", count: counts.contacts },
    { label: "Settings & Security", href: "/admin/profile", icon: "security" },
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col lg:flex-row relative">
      {/* Mobile Top Header */}
      <header className="lg:hidden bg-surface-container-low border-b border-outline-variant/10 px-6 py-4 flex items-center justify-between sticky top-0 z-[60]">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="TSL Logo" className="h-8 w-auto object-contain" />
          <h2 className="font-headline text-lg text-primary italic leading-none">Admin</h2>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-primary/5 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-2xl text-primary">
            {isSidebarOpen ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Sidebar Backdrop (Mobile Only) */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[70] transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-72 bg-surface-container-low border-r border-outline-variant/10 
        flex flex-col justify-between p-8 z-[80] transition-transform duration-300 lg:sticky lg:h-screen lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div>
          <div className="mb-12 hidden lg:block">
            <div className="flex items-center gap-4 mb-4">
               <img 
                 src="/assets/logo.png" 
                 alt="TSL Logo" 
                 className="h-10 w-auto object-contain"
               />
               <h2 className="font-headline text-xl text-primary italic leading-none">Admin</h2>
            </div>
            <p className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant/60">
              TechShield Legal Services
            </p>
          </div>

          <nav className="space-y-2 mt-4 lg:mt-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between p-4 rounded-lg font-label text-sm uppercase tracking-widest transition-all ${
                    isActive
                      ? "bg-primary text-on-primary font-bold shadow-lg"
                      : "hover:bg-primary/5 text-on-surface-variant opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-xl">{link.icon}</span>
                    {link.label}
                  </div>
                  {link.count > 0 && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isActive ? "bg-white text-primary" : "bg-primary text-white"
                    } animate-pulse`}>
                        {link.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-8 border-t border-outline-variant/10">
          <SignOutButton />
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
