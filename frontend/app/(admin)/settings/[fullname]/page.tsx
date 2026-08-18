import SettingsLayout from "../layouts/layout"
import PageHeader from "../components/PageHeader"
import General from "../components/General"
import User from "../components/User"
import Preferences from "../components/Preferences"
export default function SettingsPage({ params }: { params: { fullname: string } }) {
    return (
        <>
            <SettingsLayout>
                <PageHeader />
                <General />
                <User />
                <Preferences />
            </SettingsLayout>
        </>
    )
}
