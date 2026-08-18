import PostsLayout from "./layouts/layout";
import Header from "./components/Header";
import Posts from "./components/Posts";

export default function PostsPage() {
    return (
        <PostsLayout>
            <Header />
            <Posts />
        </PostsLayout>
    );
}
