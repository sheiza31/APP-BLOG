"use client"

import { useEffect, useState } from "react";
import PostsTable from "./PostsTable";

interface Post {
    ID: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    cover_image: string;
    status: string;
    category_id: number;
    category?: {
        ID: number;
        name: string;
    };
    tags: string;
    CreatedAt: string;
}

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:8080/api/v1/posts", {
                cache: "no-store",
            });
            const data = await response.json();
            setPosts(data.posts || []);
        } catch (err) {
            setError("Failed to fetch posts");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 text-center">
                    <span className="material-symbols-outlined text-[48px] text-on-surface-variant animate-spin">progress_activity</span>
                    <p className="mt-2 text-on-surface-variant">Loading posts...</p>
                </div>
            ) : error ? (
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 text-center">
                    <span className="material-symbols-outlined text-[48px] text-red-500">error</span>
                    <p className="mt-2 text-red-500">{error}</p>
                    <button
                        onClick={fetchPosts}
                        className="mt-4 px-4 py-2 bg-primary text-on-primary rounded hover:opacity-80"
                    >
                        Retry
                    </button>
                </div>
            ) : (
                <PostsTable posts={posts} onRefresh={fetchPosts} />
            )}
        </div>
    );
};

export default Posts;
