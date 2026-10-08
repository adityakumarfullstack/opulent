import { useState } from "react";
import { useNavigate } from "react-router-dom"

const cart = {
    products: [
        {
            productId: 1,
            name: "Product 1",
            size: "M",
            color: "Blue",
            quantity: 2,
            price: 100,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "Product 2",
            size: "L",
            color: "Red",
            quantity: 1,
            price: 200,
            image: "https://picsum.photos/200?random=2",
        },
        {
            productId: 3,
            name: "Product 3",
            size: "S",
            color: "Green",
            quantity: 3,
            price: 300,
            image: "https://picsum.photos/200?random=3",
        },
    ],
    totalPrice: 600
}

const Checkout = () => {
    const navigate = useNavigate();
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });
    const [checkoutId, setCheckoutId] = useState(null);

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        // Handle checkout creation logic here
        setCheckoutId("checkout123");
    }
    return (
        <section className="checkout-page py-10 lg:py-16">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Left Section */}
                    <div className="left-section">
                        <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Checkout</h2>
                        <form className="shipping-form" onSubmit={handleCreateCheckout}>
                            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                            <div className="form-group mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" id="email" className="form-input" value='admin@example.com' disabled />
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
                            <div className="grid grid-cols-2 space-x-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" id="firstName" className="form-input" value={shippingAddress.firstName} onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" id="lastName" className="form-input" value={shippingAddress.lastName} onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })} />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                <input type="text" id="address" className="form-input" value={shippingAddress.address} onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })} />
                            </div>
                            <div className="grid grid-cols-2 space-x-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                    <input type="text" id="city" className="form-input" value={shippingAddress.city} onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                                    <input type="text" id="postalCode" className="form-input" value={shippingAddress.postalCode} onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })} />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                                <input type="text" id="country" className="form-input" value={shippingAddress.country} onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })} />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <input type="text" id="phone" className="form-input" value={shippingAddress.phone} onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })} />
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                {!checkoutId ? (
                                    <button type="submit" className="btn-black w-full">Continue to Payment</button>
                                ) : (
                                    <div>
                                        <h3>Pay with Razorpay</h3>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div className="right-section bg-gray-50 rounded-lg p-4 md:p-5 border border-gray-100">
                        <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">Order Summary</h3>
                        <div className="border-t border-gray-300 py-4 mb-4">
                            {
                                cart.products.map((product, index) => (
                                    <div key={index} className="flex justify-between py-2 border-b border-gray-300">
                                        <div className="flex items-start">
                                            <div className="product-image">
                                                <img src={product.image} className="w-full h-24 object-cover" alt={product.name} />
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="text-md font-medium">{product.name}</h3>
                                                <p className="text-sm text-gray-600">Size: {product.size}</p>
                                                <p className="text-sm text-gray-600">Color: {product.color}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-md font-medium">${product.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="cart-total flex justify-between">
                            <p>Subtotal</p>
                            <p>${cart.totalPrice}</p>
                        </div>
                        <div className="cart-shipping flex justify-between mt-2">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className="cart-total flex justify-between border-t border-gray-300 pt-3 mt-3">
                            <p className="font-medium">Total</p>
                            <p className="font-medium">${cart.totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout