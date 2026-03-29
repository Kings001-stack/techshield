"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FadeIn from "@/app/components/FadeIn";
import { login as loginAction } from "./actions";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
    // Redirection is handled by the server action on success
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-8 py-20">
      <FadeIn className="w-full max-w-md">
        <div className="bg-surface-container-lowest p-10 md:p-12 rounded-xl shadow-[0_40px_80px_-20px_rgba(0,10,30,0.1)] border border-outline-variant/10">
          <div className="text-center mb-10">
            <div className="mb-8 flex justify-center">
              <img
                src="/assets/logo.png"
                alt="TechShield Legal Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
            <h1 className="font-headline text-3xl text-primary mb-2 italic">
              Admin Access
            </h1>
            <p className="text-on-surface-variant text-[10px] font-label font-bold uppercase tracking-[0.4em]">
              TechShield Legal &bull; Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 text-red-800 text-xs rounded-md border border-red-100 italic">
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
              <label htmlFor="password" className="sig-label">
                Secret Password
              </label>
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

            <button
              type="submit"
              disabled={loading}
              className="btn-base gold-shimmer w-full bg-primary text-white py-4 hover:bg-primary-container disabled:opacity-50"
            >
              {loading ? "Authenticating..." : "Access Dashboard"}
            </button>
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
