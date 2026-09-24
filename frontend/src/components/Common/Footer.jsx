import { TbBrandMeta } from "react-icons/tb"
import { Link } from "react-router-dom"
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"
import { FiMail, FiPhoneCall } from "react-icons/fi"


const Footer = () => {
    return (
        <footer className="footer pt-12 border-t border-gray-400">
            <div className="container">
                <div className="footer-top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="footer-widget newsletter">
                        <h3 className="text-lg text-gray-800 font-semibold mb-3">Newsletter</h3>
                        <p className="text-gray-600 mb-3">Be the first to hear about our new products, special offers, and more.</p>
                        <p className="text-gray-600 text-sm font-medium mb-5">Sign up and get 10% off your first purchase</p>
                        <form class='flex'>
                            <input type="email" placeholder="Enter your email" className="text-sm border border-gray-400 px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition rounded-l-md border-r-none" />
                            <button type="submit" className="flex-0 bg-black text-white py-2 px-6 w-full rounded-r-md hover:bg-gray-800 transition">Subscribe</button>
                        </form>
                    </div>
                    <div className="footer-widget shop-links">
                        <h3 className="text-lg text-gray-800 font-semibold mb-3">Shop</h3>
                        <ul className="space-y-2 text-gray-500">
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition">Men's Top Wear</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition">Women's Top Wear</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition">Men's Bottom Wear</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition">Women's Bottom Wear</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-widget support-links">
                        <h3 className="text-lg text-gray-800 font-semibold mb-3">Support</h3>
                        <ul className="space-y-2 text-gray-500">
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition">About Us</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition">FAQs</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-gray-800 transition">Features</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-widget follow-us">
                        <h3 className="text-lg text-gray-800 font-semibold mb-3">Follow Us</h3>
                        <ul className="flex items-center space-x-3 mb-3 text-gray-800">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                                    <TbBrandMeta className="inline-block h-5 w-5" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                                    <IoLogoInstagram className="inline-block h-5 w-5" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                                    <RiTwitterXLine className="inline-block h-5 w-5" />
                                </a>
                            </li>
                        </ul>
                        <p className="footer-call text-gray-500 mb-1">Call Us</p>
                        <p className="footer-call-number text-gray-800 font-semibold mb-3">
                            <FiPhoneCall className="inline-block h-4 w-4 mr-2" />
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </p>
                        <p className="footer-email text-gray-500 mb-1">Email Us</p>
                        <p className="footer-email-address text-gray-800 font-semibold">
                            <FiMail className="inline-block h-4 w-4 mr-2" />
                            <a href="mailto:9Qp0u@example.com">hello@example.com</a>
                        </p>
                    </div>
                </div>
                <div className="footer-bottom border-t border-gray-400 py-5 mt-10">
                    <p className="text-center text-gray-600 text-sm">{new Date().getFullYear()} © Opulent. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer