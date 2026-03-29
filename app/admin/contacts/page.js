"use client";

import { useState, useEffect } from "react";
import FadeIn from "@/app/components/FadeIn";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/admin/contacts");
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-primary font-headline italic">Retrieving Inquiries...</div>;

  return (
    <div className="space-y-12">
      <header>
        <span className="text-tertiary font-label text-xs uppercase tracking-widest block mb-4">
          Management Portal
        </span>
        <h1 className="font-headline text-5xl text-primary mb-2">Direct Inquiries</h1>
        <p className="text-on-surface-variant font-light text-lg">
          Review general legal questions and potential client reach-outs.
        </p>
      </header>

      <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-outline-variant/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20 font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                <th className="px-8 py-5">Sender Details</th>
                <th className="px-8 py-5">Message Context</th>
                <th className="px-8 py-5">Received</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-20 text-center italic text-on-surface-variant/40">
                    No active inquiries in the database at this time.
                  </td>
                </tr>
              ) : (
                contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-surface-container/30 transition-colors group">
                    <td className="px-8 py-6 align-top">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-0.5">
                          {contact.country && (
                            <img
                              src={`https://flagsapi.com/${contact.country}/flat/32.png`}
                              alt={contact.country}
                              className="w-5 h-auto shadow-sm"
                            />
                          )}
                          <span className="text-lg font-headline text-primary">{contact.name}</span>
                        </div>
                        <span className="text-xs font-light text-on-surface-variant flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[10px]">mail</span>
                          {contact.email}
                        </span>
                        <span className="text-xs font-medium text-tertiary mt-1 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[10px]">call</span>
                          {contact.phone || "No phone provided"}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 align-top">
                      <p className="text-sm font-light text-on-surface-variant leading-relaxed max-w-lg line-clamp-3 group-hover:line-clamp-none transition-all">
                        {contact.message}
                      </p>
                    </td>
                    <td className="px-8 py-6 align-top">
                      <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/60">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-8 py-6 align-top text-right">
                      <button
                        onClick={() => window.location.href = `mailto:${contact.email}?subject=Inquiry Response - TechShield Legal Services`}
                        className="btn-base bg-primary text-white p-2.5 rounded-md hover:bg-tertiary shadow-sm transition-all hover:scale-105 active:scale-95"
                        title="Reply via Email"
                      >
                        <span className="material-symbols-outlined text-sm">reply</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
