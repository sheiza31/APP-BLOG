"use client"

import { useState } from "react";

interface Category {
    ID: number;
    name: string;
    slug: string;
    description: string;
}

export default function CategoryActions({ category, onRefresh }: { category: Category; onRefresh: () => void }) {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(category.name);
    const [slug, setSlug] = useState(category.slug);
    const [description, setDescription] = useState(category.description);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:8080/api/v1/categories/${category.ID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ name, slug, description }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Failed to update");
                return;
            }

            setEditing(false);
            onRefresh();
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this category?")) return;

        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/v1/categories/${category.ID}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const data = await response.json();
                alert(data.message || "Failed to delete");
                return;
            }

            onRefresh();
        } catch (err) {
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    if (editing) {
        return (
            <td colSpan={4} className="p-4">
                <form onSubmit={handleUpdate} className="space-y-3">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">
                            {error}
                        </div>
                    )}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="flex-1 bg-transparent border border-outline-variant rounded px-3 py-2 text-sm focus:border-primary focus:outline-none"
                            placeholder="Name"
                            required
                        />
                        <input
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            className="flex-1 bg-transparent border border-outline-variant rounded px-3 py-2 text-sm focus:border-primary focus:outline-none"
                            placeholder="Slug"
                            required
                        />
                    </div>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-transparent border border-outline-variant rounded px-3 py-2 text-sm focus:border-primary focus:outline-none resize-none"
                        placeholder="Description"
                        rows={2}
                    />
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-3 py-1 bg-primary text-on-primary rounded text-sm hover:opacity-80 disabled:opacity-50"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                        <button
                            type="button"
                            onClick={() => setEditing(false)}
                            className="px-3 py-1 border border-outline text-on-surface rounded text-sm hover:bg-surface-variant"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </td>
        );
    }

    return (
        <div className="flex gap-2 justify-end">
            <button
                onClick={() => setEditing(true)}
                className="text-outline hover:text-primary transition-colors"
                title="Edit"
            >
                <span className="material-symbols-outlined text-[20px]">edit</span>
            </button>
            <button
                onClick={handleDelete}
                disabled={loading}
                className="text-outline hover:text-red-500 transition-colors disabled:opacity-50"
                title="Delete"
            >
                <span className="material-symbols-outlined text-[20px]">delete</span>
            </button>
        </div>
    );
}
