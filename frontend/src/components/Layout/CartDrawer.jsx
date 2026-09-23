import { IoMdClose } from "react-icons/io"
import CartContents from "../Cart/CartContents"


const CartDrawer = ({ drawerOpen, handleDrawerToggle }) => {

    return (
        <div className={`cart-drawer fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/3 h-full bg-white shadow-lg z-50 transition-transform ease-in-out duration-300 transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='card-drawer-close flex justify-end p-4'>
                <button type="button" onClick={handleDrawerToggle}>
                    <IoMdClose className="inline-block h-6 w-6" />
                </button>
            </div>
            {/* Cart Contents with scrollable area */}
            <div className="cart-drawer-contents p-4 flex-1 overflow-y-auto">
                <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
                <CartContents />
            </div>

            <div className="cart-footer fixed bottom-0 p-4 bg-white">
                <button type="button" className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold transition duration-200 hover:bg-black/90">Checkout</button>
                <p className="text-sm text-center text-gray-600 mt-2">Shipping,taxes and discount codes calculated at checkout</p>
            </div>
        </div>
    )
}

export default CartDrawer