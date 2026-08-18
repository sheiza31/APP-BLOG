"use client"

import { use } from "react";
import Welcome from "../components/Welcome";
import Stats from "../components/Stats";
import Article from "../components/Article";
import DashboardLayout from "../layouts/layout";

export default function DashboardPage({ params }: { params: Promise<{ fullname: string }> }) {
    const resolvedParams = use(params);

    return (
        <DashboardLayout>
            <Welcome fullname={resolvedParams.fullname} />
            <Stats />
            <Article />
        </DashboardLayout>
    );
}
