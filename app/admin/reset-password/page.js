"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import FadeIn from "@/app/components/FadeIn";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const router = useRouter();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage({ text: "Passwords do not match.", type: "error" });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      setMessage({ text: "Credentials updated successfully. Relocating...", type: "success" });
      setTimeout(() => router.push("/admin/contacts"), 2000);
    } catch (err) {
      setMessage({ text: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-8 py-20">
      <FadeIn className="w-full max-w-sm">
        <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_80px_-20px_rgba(0,10,30,0.1)] border border-outline-variant/10 text-center">
            <div className="mb-6">
                <span className="material-symbols-outlined text-4xl text-tertiary mb-2">security</span>
                <h1 className="font-headline text-3xl text-primary italic">Secure Registry</h1>
                <p className="text-on-surface-variant text-[10px] font-label font-bold uppercase tracking-[0.4em] mt-2">
                    Update Administrator Password
                </p>
            </div>

          <form onSubmit={handleUpdatePassword} className="space-y-6 text-left">
            {message.text && (
              <div className={`p-3 text-[10px] rounded border italic transition-all animate-shake ${
                message.type === 'success' ? 'bg-green-50 text-green-800 border-green-100' : 'bg-red-50 text-red-800 border-red-100'
              }`}>
                {message.text}
              </div>
            )}

            <div>
              <label className="sig-label">New Secret Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="sig-input"
              />
            </div>

            <div>
              <label className="sig-label">Confirm New Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="sig-input"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-base gold-shimmer w-full bg-primary text-white py-4 hover:bg-primary-container disabled:opacity-50 text-sm font-label uppercase tracking-widest font-bold"
            >
              {loading ? "Registering..." : "Update Credentials"}
            </button>
          </form>
        </div>
      </FadeIn>
    </div>
  );
}
