import CategoriesLayout from "./layouts/layout";
import Header from "./components/Header";
import Category from "./components/Category";

export default function CategoriesPage() {
    return (
        <CategoriesLayout>
            <Header />
            <Category />
        </CategoriesLayout>
    );
}
