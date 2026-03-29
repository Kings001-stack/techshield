"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Initial check
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setLoading(false);
    };
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session && event === 'SIGNED_OUT') {
        router.push("/admin/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  // Close sidebar on navigation (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (loading) return <div className="min-h-screen bg-surface flex items-center justify-center font-headline text-3xl italic text-primary animate-pulse">Initializing Secured Environment...</div>;

  // If we are at /admin/login, we use a separate minimal view
  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-surface">{children}</div>;
  }

  const navLinks = [
    { label: "Bookings", href: "/admin/bookings", icon: "event_available" },
    { label: "Contact Inquiries", href: "/admin/contacts", icon: "mail" },
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
                  className={`flex items-center gap-4 p-4 rounded-lg font-label text-sm uppercase tracking-widest transition-all ${
                    isActive
                      ? "bg-primary text-on-primary font-bold shadow-lg"
                      : "hover:bg-primary/5 text-on-surface-variant opacity-70 hover:opacity-100"
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-8 border-t border-outline-variant/10">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-4 p-4 w-full rounded-lg font-label text-sm uppercase tracking-widest text-red-600 hover:bg-red-50 transition-all"
          >
            <span className="material-symbols-outlined text-xl">logout</span>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
