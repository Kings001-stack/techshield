"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ReviewsManager() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", role: "", content: "" });

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/admin/reviews");
      const data = await res.json();
      if (res.ok) setReviews(data);
    } catch (err) {
      toast.error("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/admin/reviews/${editingId}` : "/api/admin/reviews";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(editingId ? "Review updated" : "Review added");
        setFormData({ name: "", role: "", content: "" });
        setIsAdding(false);
        setEditingId(null);
        fetchReviews();
      } else {
        const error = await res.json();
        throw new Error(error.error);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Review deleted");
        fetchReviews();
      }
    } catch (err) {
      toast.error("Failed to delete review");
    }
  };

  const startEdit = (review) => {
    setFormData({ name: review.name, role: review.role, content: review.content });
    setEditingId(review.id);
    setIsAdding(true);
  };

  if (loading) return <div className="p-8 text-on-surface-variant italic">Loading testimonials...</div>;

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-4xl text-primary italic mb-2">Client Testimonials</h1>
          <p className="text-on-surface-variant font-light">Manage endorsements displayed on the homepage carousel.</p>
        </div>
        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({ name: "", role: "", content: "" });
          }}
          className="btn-base bg-primary text-on-primary px-8 py-3 font-label text-[10px] tracking-widest uppercase font-bold"
        >
          {isAdding ? "Cancel" : "Add New Review"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Client Name</label>
                <input
                  required
                  className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm"
                  placeholder="e.g. Adebayo Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Role / Company</label>
                <input
                  className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm"
                  placeholder="e.g. CEO at Fintech Global"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Testimonial Content</label>
              <textarea
                required
                rows={4}
                className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-sm"
                placeholder="Describe their experience..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 rounded-lg font-label text-xs uppercase tracking-widest font-bold hover:shadow-lg transition-all"
            >
              {editingId ? "Update Review" : "Publish Testimonial"}
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {reviews.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-lowest rounded-3xl border border-dashed border-outline-variant/30">
            <span className="material-symbols-outlined text-outline-variant/40 text-6xl mb-4">rate_review</span>
            <p className="text-on-surface-variant italic">No reviews yet. Add your first one above.</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="group bg-surface-container-low border border-outline-variant/10 p-6 rounded-2xl flex flex-col md:flex-row items-start justify-between gap-6 hover:shadow-md transition-all">
              <div className="space-y-3">
                <div>
                  <h3 className="font-headline text-xl text-primary italic">{review.name}</h3>
                  <p className="text-[10px] uppercase font-label tracking-widest text-tertiary font-bold">{review.role || "Client"}</p>
                </div>
                <p className="text-on-surface-variant font-light leading-relaxed max-w-4xl text-sm italic">&quot;{review.content}&quot;</p>
              </div>
              <div className="flex items-center gap-2 shrink-0 self-end md:self-start opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => startEdit(review)}
                  className="p-2 hover:bg-primary/5 text-primary transition-colors rounded-lg"
                >
                  <span className="material-symbols-outlined text-xl">edit</span>
                </button>
                <button 
                  onClick={() => handleDelete(review.id)}
                  className="p-2 hover:bg-red-50 text-error transition-colors rounded-lg"
                >
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
