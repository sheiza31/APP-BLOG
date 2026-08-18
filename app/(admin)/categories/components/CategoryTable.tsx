"use client"

import CategoryActions from "./CategoryActions";

interface Category {
    ID: number;
    name: string;
    slug: string;
    description: string;
    post_count?: number;
}

export default function CategoryTable({ categories, onRefresh }: { categories: Category[]; onRefresh: () => void }) {
    return (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant">
                        <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Name</th>
                        <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Slug</th>
                        <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Description</th>
                        <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-right">Posts</th>
                        <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                    {categories.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="py-8 px-6 text-center font-body-md text-body-md text-on-surface-variant">
                                No categories found. Create one to get started.
                            </td>
                        </tr>
                    ) : (
                        categories.map((cat) => (
                            <tr key={cat.ID} className="hover:bg-surface-container-low transition-colors duration-150 group">
                                <td className="py-4 px-6 font-body-md text-body-md text-on-surface font-medium">{cat.name}</td>
                                <td className="py-4 px-6 font-caption text-caption text-on-surface-variant">{cat.slug}</td>
                                <td className="py-4 px-6 font-caption text-caption text-on-surface-variant max-w-[200px] truncate">{cat.description}</td>
                                <td className="py-4 px-6 font-caption text-caption text-on-surface-variant text-right">{cat.post_count || 0}</td>
                                <td className="py-4 px-6 text-right">
                                    <CategoryActions category={cat} onRefresh={onRefresh} />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
