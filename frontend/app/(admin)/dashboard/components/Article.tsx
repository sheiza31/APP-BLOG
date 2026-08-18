"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
    ID: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    cover_image: string;
    status: string;
    category?: {
        ID: number;
        name: string;
    };
    CreatedAt: string;
}

const Article = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/posts", {
                cache: "no-store",
            });
            const data = await response.json();
            setPosts((data.posts || []).slice(0, 5));
        } catch (err) {
            console.error("Failed to fetch posts");
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return "Just now";
        if (diffMins < 60) return `${diffMins} minutes ago`;
        if (diffHours < 24) return `${diffHours} hours ago`;
        if (diffDays < 7) return `${diffDays} days ago`;
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    };

    return (
        <div className="mb-stack-xl">
            <div className="flex justify-between items-center border-b border-outline-variant pb-stack-sm mb-stack-lg">
                <h3 className="font-headline-lg text-headline-lg text-on-background m-0">Recent Articles</h3>
                <Link className="font-label-caps text-label-caps text-secondary hover:text-on-secondary-container transition-colors flex items-center gap-1 border-b border-transparent hover:border-secondary pb-1" href="/posts">
                    View All
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>

            {loading ? (
                <div className="flex justify-center py-8">
                    <span className="material-symbols-outlined text-[32px] text-on-surface-variant animate-spin">progress_activity</span>
                </div>
            ) : posts.length === 0 ? (
                <div className="bg-surface border border-outline-variant p-stack-md rounded-lg text-center">
                    <span className="material-symbols-outlined text-[48px] text-on-surface-variant">article</span>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2">No articles yet. Create your first one!</p>
                </div>
            ) : (
                <div className="flex flex-col gap-stack-sm mb-4">
                    {posts.map((post) => (
                        <div key={post.ID} className="bg-surface border border-outline-variant p-stack-md rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-stack-md hover:bg-surface-container-low transition-colors duration-200">
                            <div className="flex items-center gap-stack-md flex-1">
                                <div className="w-16 h-16 rounded bg-surface-variant flex-shrink-0 overflow-hidden">
                                    {post.cover_image ? (
                                        <img
                                            className="w-full h-full object-cover"
                                            src={post.cover_image}
                                            alt={post.title}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = "none";
                                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                                            }}
                                        />
                                    ) : null}
                                    <div className={`w-full h-full flex items-center justify-center ${post.cover_image ? "hidden" : ""}`}>
                                        <span className="material-symbols-outlined text-on-surface-variant">image</span>
                                    </div>
                                </div>
                                <div>
                                    <span className={`inline-block px-2 py-1 rounded font-label-caps text-[10px] mb-2 ${
                                        post.status === "published"
                                            ? "bg-secondary-container text-on-secondary-container"
                                            : "bg-yellow-100 text-yellow-800"
                                    }`}>
                                        {post.status === "published" ? "Published" : "Draft"}
                                    </span>
                                    <h4 className="font-headline-md text-body-lg text-on-background m-0 mb-1">{post.title}</h4>
                                    <p className="font-body-md text-caption text-on-surface-variant m-0">
                                        {post.category?.name || "Uncategorized"} • {formatDate(post.CreatedAt)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 w-full sm:w-auto mt-stack-sm sm:mt-0">
                                <Link
                                    href={`/article?id=${post.ID}`}
                                    className="flex-1 sm:flex-none px-4 py-2 border border-outline text-on-surface rounded font-label-caps text-label-caps hover:bg-surface-variant transition-colors text-center"
                                >
                                    Edit
                                </Link>
                                <button className="flex-1 sm:flex-none p-2 border border-outline text-on-surface rounded hover:bg-surface-variant transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-sm">more_vert</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Article;
