import Topbar from "../UiLayout/Topbar"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className="header relative border-b border-gray-200">
            {/* Topbar */}
            <Topbar />
            {/* Navbar */}
            <Navbar />
        </header>
    )
}

export default Header