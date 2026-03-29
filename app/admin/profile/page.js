"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (!user || error) {
        setFetchError(true);
        return;
      }
      setUser(user);
      setNewEmail(user?.email || "");
    };
    fetchUser();
  }, []);

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    // Validate email format
    if (newEmail && !isValidEmail(newEmail)) {
      setMessage({
        text: "Please enter a valid email address.",
        type: "error",
      });
      setLoading(false);
      return;
    }

    const updates = {};
    if (newEmail !== user.email) updates.email = newEmail;
    if (newPassword) updates.password = newPassword;

    if (Object.keys(updates).length === 0) {
      setMessage({ text: "No changes detected.", type: "warning" });
      setLoading(false);
      return;
    }

    try {
      // Use updateUser with options to skip email validation
      const { data, error } = await supabase.auth.updateUser(updates, {
        emailRedirectTo: undefined,
      });

      if (error) {
        console.error("Supabase auth error:", error);

        // Provide more helpful error messages
        if (
          error.message.includes("invalid") &&
          error.message.includes("email")
        ) {
          setMessage({
            text: "Email update failed. This may be due to Supabase email restrictions. Try using a different email provider (e.g., Gmail, Outlook, Yahoo) or contact your administrator.",
            type: "error",
          });
        } else if (error.message.includes("rate limit")) {
          setMessage({
            text: "Too many requests. Please wait a few minutes before trying again.",
            type: "error",
          });
        } else {
          setMessage({ text: error.message, type: "error" });
        }
      } else {
        setMessage({
          text: "Profile updated successfully! Note: if you updated your email, you may need to confirm it at your new address.",
          type: "success",
        });
        setNewPassword("");

        // Refresh user data
        const {
          data: { user: updatedUser },
        } = await supabase.auth.getUser();
        if (updatedUser) {
          setUser(updatedUser);
          setNewEmail(updatedUser.email || "");
        }
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setMessage({
        text: "An unexpected error occurred. Please try again or contact support.",
        type: "error",
      });
    }

    setLoading(false);
  };

  if (fetchError)
    return (
      <div className="p-12 text-center">
        <span className="material-symbols-outlined text-5xl text-red-400 mb-4 block">lock_person</span>
        <p className="text-primary font-headline text-2xl italic mb-2">Session Expired</p>
        <p className="text-on-surface-variant text-sm mb-6">Your admin session could not be verified. Please sign in again.</p>
        <a
          href="/admin/login"
          className="inline-block btn-base bg-primary text-on-primary px-8 py-3 text-xs font-label font-bold uppercase tracking-widest hover:bg-tertiary transition-all"
        >
          Return to Login
        </a>
      </div>
    );

  if (!user)
    return (
      <div className="p-12 flex items-center gap-3 text-on-surface-variant font-light italic">
        <span className="material-symbols-outlined animate-spin text-tertiary">progress_activity</span>
        Loading Profile Context...
      </div>
    );

  return (
    <div className="max-w-xl mx-auto py-12">
      <div className="mb-12">
        <h1 className="font-headline text-5xl text-primary mb-4 italic">
          Security Settings
        </h1>
        <p className="text-on-surface-variant font-light text-xl">
          Manage your TechShield Admin credentials.
        </p>
      </div>

      <div className="bg-white border border-outline-variant/10 shadow-xl p-10">
        <form onSubmit={handleUpdateProfile} className="space-y-10">
          <div>
            <label className="block text-[10px] font-label font-bold uppercase tracking-[0.3em] text-primary/60 mb-4">
              Administrator Email
            </label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full bg-surface-container-low border-b border-outline-variant py-4 px-2 text-primary focus:outline-none focus:border-tertiary transition-all font-light"
              placeholder="Primary Admin Email"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] font-label font-bold uppercase tracking-[0.3em] text-primary/60 mb-4">
              Update Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full bg-surface-container-low border-b border-outline-variant py-4 px-2 pr-12 text-primary focus:outline-none focus:border-tertiary transition-all font-light"
                placeholder="Leave blank to keep current password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <span className="material-symbols-outlined text-xl">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
            <p className="text-[10px] text-on-surface-variant/50 mt-4 leading-relaxed tracking-wide">
              Mnemonic: Use a combination of uppercase, lowercase, numbers, and
              symbols for maximum security.
            </p>
          </div>

          {message.text && (
            <div
              className={`p-6 text-sm font-light border-l-2 ${
                message.type === "success"
                  ? "bg-green-50 text-green-700 border-green-500"
                  : message.type === "warning"
                    ? "bg-amber-50 text-amber-700 border-amber-500"
                    : "bg-red-50 text-red-700 border-red-500"
              }`}
            >
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-base bg-primary text-on-primary py-5 rounded-none font-label font-bold uppercase tracking-[0.2em] hover:bg-tertiary transition-all shadow-xl disabled:opacity-50"
          >
            {loading ? "Synchronizing..." : "Commit Security Updates"}
          </button>
        </form>
      </div>

      <div className="mt-12 p-8 bg-surface-container-high/50 border border-outline-variant/5">
        <div className="flex items-start gap-4">
          <span className="material-symbols-outlined text-tertiary">lock</span>
          <div>
            <h4 className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-primary mb-2">
              Multi-Factor Notice
            </h4>
            <p className="text-xs text-on-surface-variant font-light leading-relaxed">
              TechShield Admin security requires periodic password rotation. If
              you change your email, two confirmation links will be sent: one to
              the original address and one to the new address. Both must be
              confirmed to complete the migration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
