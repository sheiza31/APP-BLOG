"use client"

import { Suspense } from "react";
import ArticleLayout from "./layouts/layout";
import FormArticle from "./components/FormArticle";

function ArticleContent() {
    return (
        <ArticleLayout>
            <FormArticle />
        </ArticleLayout>
    );
}

export default function ArticlePage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center h-screen">
                <span className="material-symbols-outlined text-[48px] text-on-surface-variant animate-spin">progress_activity</span>
            </div>
        }>
            <ArticleContent />
        </Suspense>
    );
}
