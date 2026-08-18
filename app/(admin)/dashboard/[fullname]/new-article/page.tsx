"use client"

import { useState, useEffect, use } from "react"
import DashboardLayout from "../../layouts/layout"

interface Category {
    ID: number;
    name: string;
    slug: string;
}

export default function NewArticlePage({ params }: { params: Promise<{ fullname: string }> }) {
    const resolvedParams = use(params)
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [categoryId, setCategoryId] = useState<number>(0)
    const [content, setContent] = useState("")
    const [status, setStatus] = useState("draft")
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/categories")
            const data = await response.json()
            setCategories(data.categories || [])
        } catch (err) {
            console.error("Failed to fetch categories")
        }
    }

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value
        setTitle(newTitle)
        setSlug(generateSlug(newTitle))
    }

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const formData = new FormData()
            formData.append("file", file)
            try {
                const res = await fetch("http://localhost:8080/api/v1/upload", {
                    method: "POST",
                    body: formData,
                })
                const data = await res.json()
                if (data.url) {
                    setImagePreview(data.url)
                }
            } catch {
                console.error("Failed to upload image")
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            const response = await fetch("http://localhost:8080/api/v1/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    title,
                    slug,
                    content,
                    cover_image: imagePreview || "",
                    status,
                    category_id: categoryId,
                    tags: "",
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message || "Failed to create post")
                return
            }

            window.location.href = `/dashboard/admin`
        } catch (err) {
            setError("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto">
                <div className="mb-stack-xl flex items-center gap-4">
                    <a
                        href={`/dashboard/admin`}
                        className="text-on-surface-variant hover:text-on-surface transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </a>
                    <div>
                        <h2 className="font-display text-display md:text-display text-on-background m-0">
                            New Article
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mt-stack-sm">
                            Create a new article for your blog
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm mb-stack-lg">
                            {error}
                        </div>
                    )}

                    <div className="bg-surface border border-outline-variant rounded-lg p-stack-lg mb-stack-lg">
                        <h3 className="font-headline-md text-headline-md text-on-background m-0 mb-stack-md">
                            Basic Information
                        </h3>

                        <div className="flex flex-col gap-stack-md">
                            <div>
                                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={handleTitleChange}
                                    className="w-full bg-transparent border border-outline-variant rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:outline-none transition-colors"
                                    placeholder="Enter article title"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">
                                    Slug
                                </label>
                                <input
                                    type="text"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    className="w-full bg-transparent border border-outline-variant rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:outline-none transition-colors"
                                    placeholder="article-slug"
                                />
                            </div>

                            <div>
                                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">
                                    Category
                                </label>
                                <select
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(Number(e.target.value))}
                                    className="w-full bg-transparent border border-outline-variant rounded px-4 py-3 font-body-md text-body-md text-on-surface focus:border-primary focus:outline-none transition-colors"
                                    required
                                >
                                    <option value={0}>Select a category</option>
                                    {categories.map((cat) => (
                                        <option key={cat.ID} value={cat.ID}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface border border-outline-variant rounded-lg p-stack-lg mb-stack-lg">
                        <h3 className="font-headline-md text-headline-md text-on-background m-0 mb-stack-md">
                            Featured Image
                        </h3>

                        <div className="border-2 border-dashed border-outline-variant rounded-lg p-stack-lg text-center hover:border-primary transition-colors">
                            {imagePreview ? (
                                <div className="relative">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="max-h-64 mx-auto rounded object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setImagePreview(null)}
                                        className="absolute top-2 right-2 bg-surface-container text-on-surface p-2 rounded-full hover:bg-surface-variant transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </div>
                            ) : (
                                <label className="cursor-pointer block">
                                    <span className="material-symbols-outlined text-5xl text-outline-variant mb-4 block">
                                        cloud_upload
                                    </span>
                                    <p className="font-body-md text-body-md text-on-surface-variant m-0 mb-2">
                                        Drag and drop or click to upload
                                    </p>
                                    <p className="font-body-sm text-caption text-outline-variant m-0">
                                        PNG, JPG, GIF up to 5MB
                                    </p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            )}
                        </div>
                    </div>

                    <div className="bg-surface border border-outline-variant rounded-lg p-stack-lg mb-stack-lg">
                        <h3 className="font-headline-md text-headline-md text-on-background m-0 mb-stack-md">
                            Content
                        </h3>

                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full bg-transparent border border-outline-variant rounded px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:outline-none transition-colors min-h-[400px] resize-y"
                            placeholder="Write your article content here..."
                            required
                        />
                    </div>

                    <div className="bg-surface border border-outline-variant rounded-lg p-stack-lg mb-stack-lg">
                        <h3 className="font-headline-md text-headline-md text-on-background m-0 mb-stack-md">
                            Publish Settings
                        </h3>

                        <div className="flex gap-4">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="status"
                                    value="draft"
                                    checked={status === "draft"}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="w-5 h-5 text-primary accent-primary"
                                />
                                <span className="font-body-md text-body-md text-on-surface">Save as Draft</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="status"
                                    value="published"
                                    checked={status === "published"}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="w-5 h-5 text-primary accent-primary"
                                />
                                <span className="font-body-md text-body-md text-on-surface">Publish Now</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <a
                            href={`/dashboard/admin`}
                            className="px-6 py-3 border border-outline text-on-surface rounded font-label-caps text-label-caps hover:bg-surface-variant transition-colors"
                        >
                            Cancel
                        </a>
                        <button
                            type="submit"
                            className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-inverse-surface transition-colors flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined text-sm">save</span>
                            {status === "draft" ? "Save Draft" : "Publish Article"}
                        </button>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    )
}
