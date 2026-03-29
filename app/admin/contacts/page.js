"use client";

import { useState, useEffect } from "react";
import { markAsRead as markAction, deleteContact as deleteAction } from "./actions";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/admin/contacts");
      const data = await res.json();
      if (Array.isArray(data)) {
        setContacts(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id) => {
    const result = await markAction(id);
    if (result.success) {
      setContacts(prev => prev.map(c => c.id === id ? { ...c, is_read: true } : c));
      window.dispatchEvent(new Event("registryUpdated"));
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you certain you wish to permanently purge this inquiry from the registry?")) return;
    
    setIsDeleting(true);
    const result = await deleteAction(id);
    if (result.success) {
      setContacts(prev => prev.filter(c => c.id !== id));
      if (selectedContact?.id === id) setSelectedContact(null);
      window.dispatchEvent(new Event("registryUpdated"));
    } else {
      alert("Purge failed. Access restricted.");
    }
    setIsDeleting(false);
  };

  const handleOpenModal = (contact) => {
    setSelectedContact(contact);
    if (!contact.is_read) {
      handleMarkAsRead(contact.id);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-20">
        <div className="text-center">
          <span className="material-symbols-outlined text-4xl text-primary animate-spin mb-4 block">progress_activity</span>
          <p className="text-primary font-headline italic text-lg">Retrieving Inquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <span className="text-tertiary font-label text-xs uppercase tracking-widest block mb-4">
            Management Portal
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl text-primary mb-2">Direct Inquiries</h1>
          <p className="text-on-surface-variant font-light text-sm sm:text-lg">
            Review general legal questions and potential client reach-outs.
          </p>
        </div>
        {contacts.length > 0 && (
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full self-start sm:self-auto">
            <span className="material-symbols-outlined text-sm">inbox</span>
            <span className="text-xs font-label font-bold uppercase tracking-widest">
              {contacts.filter(c => !c.is_read).length} New / {contacts.length} Total
            </span>
          </div>
        )}
      </header>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20 font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                <th className="px-8 py-5">Sender</th>
                <th className="px-8 py-5">Legal Expertise</th>
                <th className="px-8 py-5">Context</th>
                <th className="px-8 py-5">Received</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-20 text-center italic text-on-surface-variant/40">
                    No active inquiries in the database.
                  </td>
                </tr>
              ) : (
                contacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className={`hover:bg-surface-container/30 transition-colors group cursor-pointer ${!contact.is_read ? 'bg-primary/5' : ''}`}
                    onClick={() => handleOpenModal(contact)}
                  >
                    <td className="px-8 py-6 align-top">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-0.5">
                          {!contact.is_read && (
                            <span className="bg-tertiary text-primary text-[9px] font-black uppercase px-1.5 py-0.5 rounded animate-pulse shrink-0">
                               New
                            </span>
                          )}
                          <span className={`text-base font-headline truncate max-w-[150px] ${!contact.is_read ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{contact.name}</span>
                        </div>
                        <span className="text-[10px] font-light text-on-surface-variant truncate max-w-[180px]">
                          {contact.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 align-top">
                      <div className="flex flex-col gap-1">
                        <span className={`text-xs font-bold uppercase tracking-widest ${!contact.is_read ? 'text-primary' : 'text-on-surface-variant/60'}`}>
                          {contact.service_type || "General Inquiry"}
                        </span>
                        {contact.country && (
                          <div className="flex items-center gap-1.5">
                             <img src={`https://flagsapi.com/${contact.country}/flat/32.png`} className="w-3.5 h-auto" alt={contact.country} />
                             <span className="text-[10px] text-on-surface-variant/40 font-label">{contact.country}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-8 py-6 align-top">
                      <p className={`text-sm font-light leading-relaxed max-w-sm line-clamp-2 ${!contact.is_read ? 'text-on-surface font-medium' : 'text-on-surface-variant/70'}`}>
                        {contact.message}
                      </p>
                    </td>
                    <td className="px-8 py-6 align-top whitespace-nowrap">
                      <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/50">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-8 py-6 align-top text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={(e) => { e.stopPropagation(); handleOpenModal(contact); }}
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container-high text-primary hover:bg-tertiary transition-all shadow-sm"
                        >
                          <span className="material-symbols-outlined text-base">visibility</span>
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDelete(contact.id); }}
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card Layout */}
      <div className="lg:hidden space-y-4">
        {contacts.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-xl p-12 text-center">
            <p className="italic text-on-surface-variant/40 text-sm font-light leading-relaxed">
               End of registry.
            </p>
          </div>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className={`bg-surface-container-lowest rounded-xl border p-5 shadow-sm active:scale-[0.98] transition-all cursor-pointer relative overflow-hidden ${!contact.is_read ? 'border-primary/30 ring-1 ring-primary/10' : 'border-outline-variant/10'}`}
              onClick={() => handleOpenModal(contact)}
            >
              {!contact.is_read && (
                <div className="absolute top-0 right-0">
                   <div className="bg-tertiary text-primary text-[8px] font-black uppercase px-3 py-1 pb-1.5 rounded-bl-lg tracking-widest">
                      NEW
                   </div>
                </div>
              )}
              
              <div className="flex items-start gap-4 mb-3">
                 <div className="bg-primary/5 p-3 rounded-xl shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">
                       {contact.service_type === 'Legal Consultation' ? 'video_call' : 'gavel'}
                    </span>
                 </div>
                 <div className="min-w-0">
                    <span className="text-[9px] uppercase tracking-widest font-black text-tertiary block mb-0.5">
                       {contact.service_type || "Client Inquiry"}
                    </span>
                    <h3 className={`font-headline text-base truncate ${!contact.is_read ? 'text-primary' : 'text-on-surface-variant'}`}>
                       {contact.name}
                    </h3>
                 </div>
              </div>

              <p className={`text-sm font-light line-clamp-2 leading-relaxed mb-4 ${!contact.is_read ? 'text-on-surface font-medium' : 'text-on-surface-variant/70'}`}>
                {contact.message}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-outline-variant/5">
                <div className="flex items-center gap-2">
                   {contact.country && (
                     <img src={`https://flagsapi.com/${contact.country}/flat/32.png`} className="w-5 h-auto shadow-sm" alt={contact.country} />
                   )}
                   <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/50">
                      {new Date(contact.created_at).toLocaleDateString()}
                   </span>
                </div>
                <span className="text-[10px] font-label uppercase tracking-widest text-primary/60 flex items-center gap-1 font-bold">
                  Review
                  <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Detail Modal */}
      {selectedContact && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedContact(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-primary px-6 py-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                   <span className="material-symbols-outlined text-white text-2xl">person</span>
                </div>
                <div className="min-w-0">
                  <h2 className="font-headline text-2xl text-white italic truncate pr-4">
                    {selectedContact.name}
                  </h2>
                  <span className="text-[10px] uppercase tracking-widest font-black text-tertiary">
                     Registry Status: Processing
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all shrink-0"
              >
                <span className="material-symbols-outlined text-white text-2xl">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8">
              {/* Service Tag */}
              <div className="inline-flex items-center gap-3 bg-tertiary/10 text-tertiary px-5 py-3 rounded-full border border-tertiary/20">
                 <span className="material-symbols-outlined text-sm">balance</span>
                 <span className="text-xs uppercase tracking-[0.2em] font-black">
                    {selectedContact.service_type || "General Inquiry"}
                 </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/10">
                  <span className="text-[10px] font-label font-black uppercase tracking-widest text-tertiary block mb-1">Email Connection</span>
                  <p className="text-sm text-primary font-medium break-all">{selectedContact.email}</p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/10">
                  <span className="text-[10px] font-label font-black uppercase tracking-widest text-tertiary block mb-1">Mobile Ledger</span>
                  <p className="text-sm text-primary font-medium">{selectedContact.phone || "Not Cataloged"}</p>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-label font-black uppercase tracking-widest text-tertiary block mb-4">Inquiry Content</span>
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 relative">
                  <span className="material-symbols-outlined absolute top-4 left-4 text-4xl text-primary/10 select-none">format_quote</span>
                  <p className="text-sm sm:text-base text-on-surface leading-relaxed whitespace-pre-wrap relative z-10 italic font-light">
                    {selectedContact.message}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-6 border-t border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={() => window.location.href = `mailto:${selectedContact.email}?subject=Legal Inquiry Response`}
                className="btn-base bg-primary text-white px-8 py-4 hover:bg-tertiary transition-all flex items-center justify-center gap-3 text-[11px] font-label uppercase tracking-widest font-black flex-1 shadow-lg"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                Secure Reply
              </button>
              
              <button
                onClick={() => handleDelete(selectedContact.id)}
                disabled={isDeleting}
                className="btn-base bg-red-50 text-red-600 px-6 py-4 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-3 text-[11px] font-label uppercase tracking-widest font-black disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-sm">{isDeleting ? 'progress_activity' : 'delete'}</span>
                {isDeleting ? 'Purging...' : 'Purge'}
              </button>

              <button
                onClick={() => setSelectedContact(null)}
                className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant py-2 sm:ml-auto font-bold"
              >
                Close Registry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
