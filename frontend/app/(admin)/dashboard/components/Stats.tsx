"use client"

import { useEffect, useState } from "react";

interface StatsData {
    totalPosts: number;
    totalCategories: number;
}

const Stats = () => {
    const [stats, setStats] = useState<StatsData>({ totalPosts: 0, totalCategories: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const [postsRes, categoriesRes] = await Promise.all([
                fetch("http://localhost:8080/api/v1/posts"),
                fetch("http://localhost:8080/api/v1/categories"),
            ]);

            const postsData = await postsRes.json();
            const categoriesData = await categoriesRes.json();

            setStats({
                totalPosts: (postsData.posts || []).length,
                totalCategories: (categoriesData.categories || []).length,
            });
        } catch (err) {
            console.error("Failed to fetch stats");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md mb-section-gap">
            <div className="bg-surface rounded-lg p-stack-lg border border-outline-variant relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
                </div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm">Total Articles</p>
                <p className="font-display text-display text-on-background m-0">
                    {loading ? "..." : stats.totalPosts}
                </p>
                <div className="mt-stack-md flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-sm">arrow_upward</span>
                    <span className="font-body-md text-caption">Active</span>
                </div>
            </div>
            <div className="bg-surface rounded-lg p-stack-lg border border-outline-variant relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>category</span>
                </div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm">Total Categories</p>
                <p className="font-display text-display text-on-background m-0">
                    {loading ? "..." : stats.totalCategories}
                </p>
                <div className="mt-stack-md flex items-center gap-2 text-outline">
                    <span className="material-symbols-outlined text-sm">horizontal_rule</span>
                    <span className="font-body-md text-caption">Active</span>
                </div>
            </div>
            <div className="rounded-lg text-white p-stack-lg border border-outline-variant relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                </div>
                <p className="font-label-caps text-label-caps text-on-primary-container mb-stack-sm">Total Views</p>
                <p className="font-display text-display text-on-background m-0">3.4M</p>
                <div className="mt-stack-md flex items-center gap-2 text-secondary">
                    <span className="material-symbols-outlined text-sm">arrow_upward</span>
                    <span className="font-body-md text-caption">+5.2% this month</span>
                </div>
            </div>
        </div>
    );
};

export default Stats;
