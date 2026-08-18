import MediaLayout from "./layouts/layout";
import PageHeader from "./components/PageHeader";
import Controls from "./components/Controls";
import Media from "./components/Media";
import LoadMore from "./components/LoadMore";
export default function MediaPage() {
    return (
        <>
            <MediaLayout>
                <PageHeader />
                <Controls />
                <Media />
                <LoadMore />
            </MediaLayout>
        </>
    );
}