"use client"

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface Category {
    ID: number;
    name: string;
    slug: string;
}

interface Post {
    ID: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    cover_image: string;
    status: string;
    category_id: number;
    tags: string;
}

interface FormArticleProps {
    post?: Post;
    onSaved?: () => void;
}

const FormArticle = ({ post: initialPost, onSaved }: FormArticleProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const editId = searchParams.get("id");
    const [post, setPost] = useState<Post | undefined>(initialPost);
    const [title, setTitle] = useState(initialPost?.title || "");
    const [slug, setSlug] = useState(initialPost?.slug || "");
    const [content, setContent] = useState(initialPost?.content || "");
    const [excerpt, setExcerpt] = useState(initialPost?.excerpt || "");
    const [coverImage, setCoverImage] = useState(initialPost?.cover_image || "");
    const [status, setStatus] = useState(initialPost?.status || "draft");
    const [categoryId, setCategoryId] = useState(initialPost?.category_id || 0);
    const [tags, setTags] = useState(initialPost?.tags || "");
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);
    const [fetchingPost, setFetchingPost] = useState(false);
    const [error, setError] = useState("");

    const isEditing = !!editId;

    useEffect(() => {
        const loadData = async () => {
            await fetchCategories();
            if (editId && !initialPost) {
                await fetchPost(Number(editId));
            }
        };
        loadData();
    }, [editId]);

    const fetchPost = async (id: number) => {
        try {
            setFetchingPost(true);
            const response = await fetch(`http://localhost:8080/api/v1/posts/${id}`);
            const data = await response.json();
            if (data.post) {
                setPost(data.post);
                setTitle(data.post.title);
                setSlug(data.post.slug);
                setContent(data.post.content);
                setExcerpt(data.post.excerpt || "");
                setCoverImage(data.post.cover_image || "");
                setStatus(data.post.status || "draft");
                setCategoryId(data.post.category_id || 0);
                setTags(data.post.tags || "");
            }
        } catch (err) {
            setError("Failed to load post");
        } finally {
            setFetchingPost(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/categories");
            const data = await response.json();
            setCategories(data.categories || []);
        } catch (err) {
            console.error("Failed to fetch categories");
        }
    };

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        if (!isEditing) {
            setSlug(generateSlug(newTitle));
        }
    };

    const handleSubmit = async (e: React.FormEvent, submitStatus: string) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const url = isEditing
                ? `http://localhost:8080/api/v1/posts/${post?.ID}`
                : "http://localhost:8080/api/v1/posts";

            const response = await fetch(url, {
                method: isEditing ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    title,
                    slug,
                    content,
                    excerpt,
                    cover_image: coverImage,
                    status: submitStatus,
                    category_id: categoryId,
                    tags,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Something went wrong");
                return;
            }

            if (!isEditing) {
                setTitle("");
                setSlug("");
                setContent("");
                setExcerpt("");
                setCoverImage("");
                setTags("");
                setCategoryId(0);
            }

            if (onSaved) onSaved();
            router.push("/dashboard/admin");
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[max-content-width] space-y-stack-lg">
            <div className="flex justify-between items-end border-b border-outline-variant pb-stack-sm">
                <h2 className="font-headline-lg text-headline-lg text-primary">
                    Edit Article
                </h2>
                <div className="flex gap-stack-md">
                    <button
                        className="px-4 py-2 border border-outline text-primary font-label-caps text-label-caps rounded hover:bg-surface-variant transition-colors"
                        type="button"
                        onClick={(e) => handleSubmit(e as any, "draft")}
                        disabled={loading}
                    >
                        {loading ? "Saving..." : "Save as Draft"}
                    </button>
                    <button
                        className="px-4 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded hover:bg-primary-container hover:text-on-primary-container transition-colors"
                        type="button"
                        onClick={(e) => handleSubmit(e as any, "published")}
                        disabled={loading}
                    >
                        {loading ? "Publishing..." : "Publish"}
                    </button>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                    {error}
                </div>
            )}

            <form className="space-y-stack-lg">
                <div>
                    <label className="sr-only" htmlFor="title">Article Title</label>
                    <input
                        className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-headline-md text-headline-md text-primary placeholder-outline-variant"
                        id="title"
                        name="title"
                        placeholder="Enter article title..."
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                    <div>
                        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-stack-xs uppercase tracking-widest" htmlFor="category">
                            Category
                        </label>
                        <select
                            className="w-full bg-surface-container-lowest border border-outline-variant text-primary font-body-md text-body-md rounded focus:ring-primary focus:border-primary py-2 px-3"
                            id="category"
                            name="category"
                            value={categoryId}
                            onChange={(e) => setCategoryId(Number(e.target.value))}
                        >
                            <option disabled value={0}>Select a category</option>
                            {categories.map((cat) => (
                                <option key={cat.ID} value={cat.ID}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-stack-xs uppercase tracking-widest" htmlFor="tags">
                            Tags
                        </label>
                        <input
                            className="w-full bg-surface-container-lowest border border-outline-variant text-primary font-body-md text-body-md rounded focus:ring-primary focus:border-primary py-2 px-3"
                            id="tags"
                            name="tags"
                            placeholder="e.g. UX, Future, AI"
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-stack-xs uppercase tracking-widest">
                        Featured Image
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-outline-variant border-dashed rounded-lg bg-surface-container-low hover:bg-surface-variant transition-colors cursor-pointer group">
                        <div className="space-y-1 text-center">
                            <span className="material-symbols-outlined text-outline-variant text-4xl group-hover:text-primary transition-colors" data-icon="image">
                                image
                            </span>
                            <div className="flex text-sm text-on-surface-variant justify-center">
                                <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-secondary hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary" htmlFor="file-upload">
                                    <span>Upload a file</span>
                                    <input
                                        className="sr-only"
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                    onChange={async (e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const formData = new FormData();
                                            formData.append("file", file);
                                            try {
                                                const res = await fetch("http://localhost:8080/api/v1/upload", {
                                                    method: "POST",
                                                    body: formData,
                                                });
                                                const data = await res.json();
                                                if (data.url) {
                                                    setCoverImage(data.url);
                                                }
                                            } catch {
                                                console.error("Failed to upload image");
                                            }
                                        }
                                    }}
                                    />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="font-caption text-caption text-outline">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                    {coverImage && (
                        <div className="mt-2">
                            <img src={coverImage} alt="Preview" className="w-full h-48 object-cover rounded" />
                        </div>
                    )}
                </div>

                <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-stack-xs uppercase tracking-widest" htmlFor="excerpt">
                        Excerpt
                    </label>
                    <textarea
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded p-3 font-body-md text-body-md text-primary focus:ring-0 focus:border-outline-variant resize-none"
                        id="excerpt"
                        name="excerpt"
                        placeholder="Brief summary of the article..."
                        rows={3}
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                    />
                </div>

                <div className="flex-1 flex flex-col min-h-[400px]">
                    <label className="sr-only" htmlFor="content">Article Content</label>
                    <div className="border border-outline-variant rounded-t bg-surface-container-low flex items-center gap-2 p-2 px-4">
                        <button className="text-on-surface-variant hover:text-primary" type="button">
                            <span className="material-symbols-outlined" data-icon="format_bold">format_bold</span>
                        </button>
                        <button className="text-on-surface-variant hover:text-primary" type="button">
                            <span className="material-symbols-outlined" data-icon="format_italic">format_italic</span>
                        </button>
                        <div className="w-px h-5 bg-outline-variant mx-1"></div>
                        <button className="text-on-surface-variant hover:text-primary" type="button">
                            <span className="material-symbols-outlined" data-icon="format_h1">format_h1</span>
                        </button>
                        <button className="text-on-surface-variant hover:text-primary" type="button">
                            <span className="material-symbols-outlined" data-icon="format_h2">format_h2</span>
                        </button>
                        <div className="w-px h-5 bg-outline-variant mx-1"></div>
                        <button className="text-on-surface-variant hover:text-primary" type="button">
                            <span className="material-symbols-outlined" data-icon="format_quote">format_quote</span>
                        </button>
                        <button className="text-on-surface-variant hover:text-primary" type="button">
                            <span className="material-symbols-outlined" data-icon="link">link</span>
                        </button>
                    </div>
                    <textarea
                        className="w-full flex-1 bg-surface-container-lowest border-x border-b border-outline-variant border-t-0 rounded-b p-4 font-body-lg text-body-lg text-primary focus:ring-0 focus:border-outline-variant resize-y outline-none leading-relaxed"
                        id="content"
                        name="content"
                        placeholder="Start writing..."
                        rows={15}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default FormArticle;
