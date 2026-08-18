"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

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

interface PostsTableProps {
    posts: Post[];
    onRefresh: () => void;
}

export default function PostsTable({ posts, onRefresh }: PostsTableProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/v1/posts/${id}`, {
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

    const handleEdit = (id: number) => {
        router.push(`/article?id=${id}`);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant">
                        <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Title</th>
                        <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Category</th>
                        <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Status</th>
                        <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Date</th>
                        <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                    {posts.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="py-8 px-6 text-center font-body-md text-body-md text-on-surface-variant">
                                No posts found. Create one to get started.
                            </td>
                        </tr>
                    ) : (
                        posts.map((post) => (
                            <tr key={post.ID} className="hover:bg-surface-container-low transition-colors duration-150 group">
                                <td className="py-4 px-6">
                                    <div className="font-body-md text-body-md text-on-surface font-medium">{post.title}</div>
                                    <div className="font-caption text-caption text-on-surface-variant mt-1 truncate max-w-[300px]">{post.excerpt || post.slug}</div>
                                </td>
                                <td className="py-4 px-6 font-caption text-caption text-on-surface-variant">
                                    {post.category?.name || "-"}
                                </td>
                                <td className="py-4 px-6">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        post.status === "published"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-yellow-100 text-yellow-800"
                                    }`}>
                                        {post.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6 font-caption text-caption text-on-surface-variant">
                                    {formatDate(post.CreatedAt)}
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <div className="flex gap-2 justify-end">
                                        <button
                                            onClick={() => handleEdit(post.ID)}
                                            className="text-outline hover:text-primary transition-colors"
                                            title="Edit"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post.ID)}
                                            disabled={loading}
                                            className="text-outline hover:text-red-500 transition-colors disabled:opacity-50"
                                            title="Delete"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
