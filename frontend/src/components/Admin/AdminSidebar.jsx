import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from "react-icons/fa"
import { Link, NavLink, useNavigate } from "react-router-dom"

const AdminSidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }
    return (
        <div className="sidebar p-5">
            <div className="mb-6">
                <Link to="/admin" className="text-xl sm:text-2xl font-semibold">Opulent</Link>
            </div>
            <h2 className="text-lg font-medium pl-4 mb-2">Admin Dashboard</h2>
            <nav className="flex flex-col space-y-1">
                <NavLink to="/admin/users" className={({ isActive }) => `flex items-center gap-2 py-2 px-4 rounded cursor-pointer ${isActive ? 'bg-gray-700 text-white' : ''} text-gray-300 hover:bg-gray-700 hover:text-white duration-300 ease-in-out transition`}>
                    <span><FaUser /></span>
                    <span>Users</span>
                </NavLink>
                <NavLink to="/admin/products" className={({ isActive }) => `flex items-center gap-2 py-2 px-4 rounded cursor-pointer ${isActive ? 'bg-gray-700 text-white' : ''} text-gray-300 hover:bg-gray-700 hover:text-white duration-300 ease-in-out transition`}>
                    <span><FaBoxOpen /></span>
                    <span>Products</span>
                </NavLink>
                <NavLink to="/admin/orders" className={({ isActive }) => `flex items-center gap-2 py-2 px-4 rounded cursor-pointer ${isActive ? 'bg-gray-700 text-white' : ''} text-gray-300 hover:bg-gray-700 hover:text-white duration-300 ease-in-out transition`}>
                    <span><FaClipboardList /></span>
                    <span>Orders</span>
                </NavLink>
                <NavLink to="/admin/shop" className={({ isActive }) => `flex items-center gap-2 py-2 px-4 rounded cursor-pointer ${isActive ? 'bg-gray-700 text-white' : ''} text-gray-300 hover:bg-gray-700 hover:text-white duration-300 ease-in-out transition`}>
                    <span><FaStore /></span>
                    <span>Shop</span>
                </NavLink>
            </nav>
            <div className="mt-5">
                <button type="button" className="btn-theme w-full flex-center  gap-2" onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </div>
    )
}

export default AdminSidebar