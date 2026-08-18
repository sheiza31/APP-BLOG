"use client"

import { useEffect, useState } from "react";
import CategoryTable from "./CategoryTable";
import CategoryForm from "./CategoryForm";

interface CategoryType {
    ID: number;
    name: string;
    slug: string;
    description: string;
    post_count?: number;
}

const Category = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:8080/api/v1/categories", {
                cache: "no-store",
            });
            const data = await response.json();
            setCategories(data.categories || []);
        } catch (err) {
            setError("Failed to fetch categories");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg items-start">
            <div className="lg:col-span-2">
                {loading ? (
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 text-center">
                        <span className="material-symbols-outlined text-[48px] text-on-surface-variant animate-spin">progress_activity</span>
                        <p className="mt-2 text-on-surface-variant">Loading categories...</p>
                    </div>
                ) : error ? (
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 text-center">
                        <span className="material-symbols-outlined text-[48px] text-red-500">error</span>
                        <p className="mt-2 text-red-500">{error}</p>
                        <button
                            onClick={fetchCategories}
                            className="mt-4 px-4 py-2 bg-primary text-on-primary rounded hover:opacity-80"
                        >
                            Retry
                        </button>
                    </div>
                ) : (
                    <CategoryTable categories={categories} onRefresh={fetchCategories} />
                )}
            </div>
            <div className="lg:col-span-1 sticky top-[100px]">
                <CategoryForm onCreated={fetchCategories} />
            </div>
        </div>
    );
};

export default Category;
