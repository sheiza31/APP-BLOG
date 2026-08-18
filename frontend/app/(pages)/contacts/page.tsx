import Contact from "./components/Contact";
import ContactsLayout from "./layouts/layout";
import Header from "./components/Header";
export default function ContactsPage() {
    return (
        <>
        <ContactsLayout>
            <Header />
            <Contact />
        </ContactsLayout>
        </>
    );
}