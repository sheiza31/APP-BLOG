"use client"

import { useState } from "react";

interface CategoryFormProps {
    category?: {
        ID: number;
        name: string;
        slug: string;
        description: string;
    };
    onClose?: () => void;
    onCreated?: () => void;
}

export default function CategoryForm({ category, onClose, onCreated }: CategoryFormProps) {
    const [name, setName] = useState(category?.name || "");
    const [slug, setSlug] = useState(category?.slug || "");
    const [description, setDescription] = useState(category?.description || "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const isEditing = !!category;

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setName(newName);
        if (!isEditing) {
            setSlug(generateSlug(newName));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const url = isEditing
                ? `http://localhost:8080/api/v1/categories/${category.ID}`
                : "http://localhost:8080/api/v1/categories";

            const response = await fetch(url, {
                method: isEditing ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ name, slug, description }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Something went wrong");
                return;
            }

            setName("");
            setSlug("");
            setDescription("");
            if (onCreated) onCreated();
            if (onClose) onClose();
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant">
            <h3 className="font-headline-md text-headline-md text-primary mb-stack-md border-b border-outline-variant pb-2">
                {isEditing ? "Edit Category" : "Add New Category"}
            </h3>
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm mb-stack-md">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-stack-md">
                <div className="flex flex-col gap-stack-xs">
                    <label className="font-label-caps text-label-caps text-on-surface" htmlFor="cat-name">Category Name</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface placeholder-outline-variant transition-colors"
                        id="cat-name"
                        placeholder="e.g., Typography"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="flex flex-col gap-stack-xs">
                    <label className="font-label-caps text-label-caps text-on-surface" htmlFor="cat-slug">Slug</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface placeholder-outline-variant transition-colors"
                        id="cat-slug"
                        placeholder="e.g., typography-design"
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        required
                    />
                    <span className="font-caption text-[12px] text-on-surface-variant mt-1">Leave blank to auto-generate from name.</span>
                </div>
                <div className="flex flex-col gap-stack-xs">
                    <label className="font-label-caps text-label-caps text-on-surface" htmlFor="cat-desc">Description</label>
                    <textarea
                        className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface placeholder-outline-variant transition-colors resize-none"
                        id="cat-desc"
                        placeholder="Brief description of the category..."
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 mt-stack-md">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 bg-tertiary text-on-tertiary font-label-caps text-label-caps py-3 px-6 rounded hover:bg-surface-tint transition-colors uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        <span className="material-symbols-outlined text-[18px]">{isEditing ? "save" : "add"}</span>
                        {loading ? "Saving..." : isEditing ? "Update Category" : "Create Category"}
                    </button>
                    {isEditing && onClose && (
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-3 border border-outline text-on-surface rounded font-label-caps text-label-caps hover:bg-surface-variant transition-colors"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
