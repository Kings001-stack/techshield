"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FadeIn from "@/app/components/FadeIn";
import { supabase } from "@/lib/supabase";
import { login as loginAction } from "./actions";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState({ text: "", type: "" });
  const router = useRouter();

  const ALLOWED_EMAILS = [
    "e93521365@gmail.com",
    "emmanuelkingugwu3@gmail.com"
  ];

  const handleAuthAction = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!ALLOWED_EMAILS.includes(email.toLowerCase())) {
        setError("Unauthorized Registry Attempt. Access Denied.");
        setLoading(false);
        return;
    }

    if (isRegistering) {
        // Sign up with email verification
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${window.location.origin}/admin/login`,
            }
        });
        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            // Provide feedback that verification is required
            setError("Success! Secure verification dispatched. Inspect your registry inbox.");
            setLoading(false);
            setIsRegistering(false);
        }
        return;
    }

    // Traditional Login
    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    if (!ALLOWED_EMAILS.includes(resetEmail.toLowerCase())) {
        setResetMessage({ text: "Unauthorized Identity. Recovery Blocked.", type: "error" });
        return;
    }

    setResetLoading(true);
    setResetMessage({ text: "", type: "" });

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      });

      if (error) throw error;

      setResetMessage({
        text: "Recovery link dispatched. Please monitor your secure inbox.",
        type: "success",
      });
      setTimeout(() => setShowResetPassword(false), 3000);
    } catch (err) {
      setResetMessage({ text: err.message, type: "error" });
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-8 py-20">
      <FadeIn className="w-full max-w-md">
        <div className="bg-surface-container-lowest/80 backdrop-blur-xl p-10 md:p-14 rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,10,30,0.15)] border border-outline-variant/10 relative overflow-hidden group">
          {/* Subtle decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-tertiary/5 rounded-full blur-3xl group-hover:bg-tertiary/10 transition-colors duration-700" />
          
          <div className="text-center mb-12 relative">
            <div className="mb-10 flex justify-center">
              <div className="p-4 bg-surface rounded-2xl shadow-inner border border-outline-variant/5">
                <img
                  src="/assets/logo.png"
                  alt="TechShield Legal Logo"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
            <h1 className="font-headline text-4xl text-primary mb-3 italic tracking-tight">
              {isRegistering ? "Register Entry" : "Admin Access"}
            </h1>
            <p className="text-on-surface-variant text-[10px] font-label font-bold uppercase tracking-[0.5em]">
              TechShield &bull; Secure Registry
            </p>
          </div>

          <form onSubmit={handleAuthAction} className="space-y-6">
            {error && (
              <div className={`p-4 text-xs rounded-md border italic transition-all animate-shake ${
                error.includes("Success") ? "bg-green-50 text-green-800 border-green-100" : "bg-red-50 text-red-800 border-red-100"
              }`}>
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="sig-label">
                Administrator Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@editorialjuris.com"
                className="sig-input"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="sig-label !mb-0">
                  Secret Password
                </label>
                {!isRegistering && (
                  <button
                    type="button"
                    onClick={() => setShowResetPassword(true)}
                    className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant hover:text-tertiary transition-colors"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="sig-input pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={loading}
                className="btn-base gold-shimmer w-full bg-primary text-white py-4 hover:bg-primary-container disabled:opacity-50"
              >
                {loading ? "Authenticating..." : (isRegistering ? "Create Official Account" : "Access Dashboard")}
              </button>
              
              <div className="text-center pt-2">
                  <button 
                  type="button"
                    onClick={() => setIsRegistering(!isRegistering)}
                    className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors py-2 px-4 rounded border border-outline-variant/5"
                  >
                    {isRegistering ? "Already have an account? Sign in here" : "Need a new account? Register here"}
                  </button>
              </div>
            </div>
          </form>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="text-xs font-label text-on-surface-variant hover:text-tertiary transition-colors tracking-widest uppercase"
            >
              Back to Public Site
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* Forgot Password Modal */}
      {showResetPassword && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-6 transition-all animate-fadeIn">
          <div className="bg-surface-container-lowest w-full max-w-sm p-8 rounded-xl shadow-2xl border border-outline-variant/10 relative">
            <button 
              onClick={() => setShowResetPassword(false)}
              className="absolute right-4 top-4 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="mb-6">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-2">lock_reset</span>
              <h2 className="font-headline text-2xl text-primary italic">Recover Access</h2>
              <p className="text-on-surface-variant text-xs font-light mt-1">Authorized Administrators Only</p>
            </div>

            <form onSubmit={handleResetPassword} className="space-y-4">
              {resetMessage.text && (
                <div className={`p-3 text-[10px] rounded border italic ${
                  resetMessage.type === 'success' ? 'bg-green-50 text-green-800 border-green-100' : 'bg-red-50 text-red-800 border-red-100'
                }`}>
                  {resetMessage.text}
                </div>
              )}
              <div>
                <label className="sig-label">Registered Admin Email</label>
                <input
                  type="email"
                  required
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="admin@editorialjuris.com"
                  className="sig-input text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={resetLoading}
                className="btn-base w-full bg-primary text-white py-3 hover:bg-primary-container disabled:opacity-50 text-xs font-label uppercase tracking-widest font-bold"
              >
                {resetLoading ? "Processing..." : "Dispatch Link"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Minimal Link component since this is a clean file
function Link({ href, children, className }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
