import Navbar from './Navbar'
import Breadcrumb from './Breadcrumb'
import Hero from './Hero'

function DashboardShell({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <Hero>
                {children}
            </Hero>
            {/* <Auth /> */}
        </>
    )
}

export default DashboardShell