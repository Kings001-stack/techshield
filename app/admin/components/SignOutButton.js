"use client";

import { signOut } from "../login/signout-action";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut();
            // The server action already redirects, but for fallback:
            router.push("/admin/login");
        } catch (error) {
            console.error("Sign out failed:", error);
        }
    };

    return (
        <button
            onClick={handleSignOut}
            className="flex items-center gap-4 p-4 w-full rounded-lg font-label text-sm uppercase tracking-widest text-red-600 hover:bg-red-50 transition-all group"
        >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">logout</span>
            Sign Out
        </button>
    );
}
