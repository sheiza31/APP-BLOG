import PreviewLayout from "../layouts/layout";
import Header from "../components/Header";
import Article from "../components/Article";
import Featured from "../components/Featured";
export default function PreviewPage(params: { slug: string }) {
    return (
       <>
        <PreviewLayout>
            <Header />
            <Featured />
            <Article />
        </PreviewLayout>
       </>
    );
}