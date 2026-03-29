"use client";

import { useState, useEffect } from "react";
import FadeIn from "@/app/components/FadeIn";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/admin/bookings");
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/bookings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        fetchBookings();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) return <div className="text-primary font-headline italic">Retrieving Schedule...</div>;

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-tertiary font-label text-xs uppercase tracking-widest block mb-4">
            Management Portal
          </span>
          <h1 className="font-headline text-5xl text-primary mb-2">Consultation Bookings</h1>
          <p className="text-on-surface-variant font-light text-lg">
            Manage incoming consultation requests and coordinate schedules.
          </p>
        </div>
        <div className="bg-surface-container p-6 rounded-lg border border-outline-variant/10 text-center md:text-left">
          <span className="block text-2xl font-headline text-primary">
            {bookings.filter(b => b.status === "pending").length}
          </span>
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-label font-bold">
            Pending Requests
          </span>
        </div>
      </header>

      <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-outline-variant/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20 font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                <th className="px-8 py-5">Client Name</th>
                <th className="px-8 py-5">Service Type</th>
                <th className="px-8 py-5">Schedule</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-20 text-center italic text-on-surface-variant/40">
                    No bookings found in the secure registry.
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-surface-container/30 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-0.5">
                          {booking.country && (
                            <img
                              src={`https://flagsapi.com/${booking.country}/flat/32.png`}
                              alt={booking.country}
                              className="w-5 h-auto shadow-sm"
                            />
                          )}
                          <span className="text-lg font-headline text-primary">{booking.name}</span>
                        </div>
                        <span className="text-xs font-light text-on-surface-variant flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[10px]">mail</span>
                          {booking.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="inline-flex px-3 py-1 rounded-full bg-tertiary-container/30 text-on-tertiary-container text-[0.65rem] font-bold uppercase tracking-widest whitespace-nowrap">
                        {booking.service_type || "General Consultation"}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-label text-primary">{booking.preferred_date}</span>
                        <span className="text-xs font-light text-on-surface-variant uppercase tracking-widest">{booking.preferred_time}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-widest ${booking.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : booking.status === "cancelled"
                            ? "bg-red-100 text-red-800"
                            : "bg-surface-variant text-on-surface-variant"
                        }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-3">
                        {booking.status === "pending" && (
                          <>
                            <button
                              onClick={() => updateStatus(booking.id, "confirmed")}
                              className="btn-base bg-green-600 text-white p-2 rounded-md hover:bg-green-700 disabled:opacity-50"
                              disabled={updatingId === booking.id}
                            >
                              <span className="material-symbols-outlined text-base">check</span>
                            </button>
                            <button
                              onClick={() => updateStatus(booking.id, "cancelled")}
                              className="btn-base bg-red-600 text-white p-2 rounded-md hover:bg-red-700 disabled:opacity-50"
                              disabled={updatingId === booking.id}
                            >
                              <span className="material-symbols-outlined text-base">close</span>
                            </button>
                          </>
                        )}
                        {booking.status !== "pending" && (
                          <button
                            onClick={() => updateStatus(booking.id, "pending")}
                            className="bg-surface-container-high text-on-surface-variant text-xs p-2 rounded-md hover:text-primary transition-colors"
                            disabled={updatingId === booking.id}
                          >
                            Reset
                          </button>
                        )}
                      </div>
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
