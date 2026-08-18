import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-between items-center mb-stack-lg">
            <h1 className="font-headline-lg text-headline-lg text-primary">Posts</h1>
            <Link
                href="/dashboard/new-article"
                className="px-4 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center gap-2"
            >
                <span className="material-symbols-outlined text-[18px]">add</span>
                New Article
            </Link>
        </div>
    );
};

export default Header;
