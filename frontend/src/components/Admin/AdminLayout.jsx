import { useState } from "react"
import AdminSidebar from "./AdminSidebar"
import { Outlet } from "react-router-dom"

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <section className="admin-layout min-h-screen flex flex-col md:flex-row relative">
            <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
                <button onClick={handleSidebarToggle} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
                </button>
            </div>
            {isSidebarOpen && (
                <div className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 md:hidden" onClick={handleSidebarToggle}></div>)}

            <div className={`sidebar-parent bg-gray-900 text-white w-64 h-full absolute md:relative transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform ease-in-out duration-300 z-20`}>
                <AdminSidebar />
            </div>

            <main className="flex-1 p-6">
                <Outlet />
            </main>

        </section>
    )
}

export default AdminLayout