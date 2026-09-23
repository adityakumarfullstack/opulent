import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"

const Topbar = () => {
    return (
        <div className="topbar bg-brand-red text-white">
            <div className="container flex items-center justify-between py-2">
                <div className="social-icons-parent items-center space-x-4 hidden md:flex">
                    <a href="#" className="flex align-center hover:text-gray-300">
                        <TbBrandMeta className="inline-block h-4 w-4" />
                    </a>
                    <a href="#" className="flex align-center hover:text-gray-300">
                        <IoLogoInstagram className="inline-block h-4 w-4" />
                    </a>
                    <a href="#" className="flex align-center hover:text-gray-300">
                        <RiTwitterXLine className="inline-block h-4 w-4" />
                    </a>
                </div>
                <div className="topbar-message-parent text-sm text-center flex-grow">
                    <span>We ship worldwide - Fast and reliable shipping!</span>
                </div>
                <div className="topbar-call-parent text-sm hidden md:block">
                    <a href="tel:+1234567890" className="hover:text-gray-300">+1 (234) 567-890</a>
                </div>
            </div>
        </div>
    )
}

export default Topbar