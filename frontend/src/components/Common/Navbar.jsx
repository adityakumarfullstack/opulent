import { useState } from "react"
import { Link } from "react-router-dom"
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import NavSearch from "./NavSearch";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [navDrawerOpen, setNavDrawerOpen] = useState(false)

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
    }

    const handleNavDrawerToggle = () => {
        setNavDrawerOpen(!navDrawerOpen)
    }

    return (
        <>
            <nav className="navbar">
                <div className="container flex-between py-4">
                    {/* Nav Logo */}
                    <div className="logo">
                        <Link to="/" className="text-2xl font-medium">
                            Opulent
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <div className="nav-menu hidden md:flex gap-4">
                        <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Men</Link>
                        <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Women</Link>
                        <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Top Wear</Link>
                        <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Bottom Wear</Link>
                    </div>

                    {/* Nav Actions */}
                    <div className="nav-actions flex gap-4">
                        <Link to="/profile" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                            <FiUser className="inline-block h-6 w-6" />
                        </Link>
                        <button type="button" onClick={handleDrawerToggle} className="relative text-gray-700 hover:text-black text-sm font-medium uppercase">
                            <HiOutlineShoppingBag className="inline-block h-6 w-6" />
                            <span className="absolute -top-1.5 -right-2 text-xs bg-brand-red text-white rounded-full h-5 w-5 flex items-center justify-center">2</span>
                        </button>
                        <NavSearch />
                        <button type="button" onClick={handleNavDrawerToggle} className="inline-block md:hidden text-gray-700 hover:text-black text-sm font-medium uppercase">
                            <HiMiniBars3BottomRight className="inline-block h-6 w-6" />
                        </button>
                    </div>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
            <div className={`nav-drawer fixed top-0 left-0 w-3/4 sm:1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div class='nav-drawer-close flex justify-end p-4'>
                    <button type="button" onClick={handleNavDrawerToggle}>
                        <IoMdClose className="inline-block h-6 w-6" />
                    </button>
                </div>
                <div className="mobile-nav-menu p-4">
                    <h3 className="text-xl font-semibold mb-4">Menu</h3>
                    <nav className="flex flex-col gap-4">
                        <Link to="#" onClick={handleNavDrawerToggle} className="text-gray-700 hover:text-black text-sm font-medium uppercase">Men</Link>
                        <Link to="#" onClick={handleNavDrawerToggle} className="text-gray-700 hover:text-black text-sm font-medium uppercase">Women</Link>
                        <Link to="#" onClick={handleNavDrawerToggle} className="text-gray-700 hover:text-black text-sm font-medium uppercase">Top Wear</Link>
                        <Link to="#" onClick={handleNavDrawerToggle} className="text-gray-700 hover:text-black text-sm font-medium uppercase">Bottom Wear</Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar