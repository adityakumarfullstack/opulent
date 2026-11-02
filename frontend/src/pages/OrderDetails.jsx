import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetails = () => {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const mockOrderDetails = {
            _id: id,
            createdAt: new Date(),
            isPaid: true,
            isDelivered: false,
            paymentMethod: "Razorpay",
            shippingMethod: "Standard",
            shippingAddress: {
                address: "123 Main St",
                city: "New York",
                country: "USA"
            },
            orderItems: [
                {
                    productId: "1",
                    name: "Stylsh Jacket 1",
                    image: "https://picsum.photos/500/500?random=1",
                    price: 120,
                    quantity: 1,
                },
                {
                    productId: "2",
                    name: "Stylsh Jacket 2",
                    image: "https://picsum.photos/500/500?random=2",
                    price: 120,
                    quantity: 1,
                },
                {
                    productId: "3",
                    name: "Stylsh Jacket 3",
                    image: "https://picsum.photos/500/500?random=3",
                    price: 120,
                    quantity: 1,
                },
            ],
        }
        setOrderDetails(mockOrderDetails);
    }, [id]);
    return (
        <section className="order-details-section py-10 lg:py-16">
            <div className="container">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">Order Details</h2>
                    {
                        !orderDetails ? <p className="text-center">No order found</p>
                            : (
                                <div className="order-details p-4 md:p-6 border border-gray-300 rounded-lg">
                                    <div className="flex flex-col sm:flex-row justify-between mb-8">
                                        <div>
                                            <h3 className="text-lg md:text-xl font-semibold mb-2">Order ID: #{orderDetails._id}</h3>
                                            <p className="text-gray-600">{new Date(orderDetails.createdAt).toLocaleDateString()}</p>
                                        </div>
                                        <div className="flex flex-col items-start sm:items-end gap-2 mt-4 sm:mt-0">
                                            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${orderDetails.isPaid ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>{orderDetails.isPaid ? "Approved" : "Pending"}</span>
                                            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${orderDetails.isDelivered ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>{orderDetails.isPaid ? "Delivered" : "Pending Delivery"}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
                                            <p className="text-gray-600">Payment Method: {orderDetails.paymentMethod}</p>
                                            <p className="text-gray-600">Status: {orderDetails.isPaid ? "Paid" : "Pending"}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
                                            <p className="text-gray-600">Shipping Method: {orderDetails.shippingMethod}</p>
                                            <p className="text-gray-600">Address: {orderDetails.shippingAddress.address}, {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.country}</p>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto mb-8">
                                        <h4 className="text-lg font-semibold mb-2">Products</h4>
                                        <table className="min-w-full text-gray-600 text-left">
                                            <thead className="border-b border-gray-200 bg-gray-100">
                                                <tr>
                                                    <th className="px-4 py-2 whitespace-nowrap">Product</th>
                                                    <th className="px-4 py-2 whitespace-nowrap">Unit Price</th>
                                                    <th className="px-4 py-2 whitespace-nowrap">Quantity</th>
                                                    <th className="px-4 py-2 whitespace-nowrap">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderDetails.orderItems.map((item) => (
                                                    <tr key={item.productId} className="border-b border-gray-200">
                                                        <td className="px-4 py-2 whitespace-nowrap flex items-center">
                                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                                                            <Link to={`/product/${item.productId}`} className="text-blue-600 hover:underline">{item.name}</Link>
                                                        </td>
                                                        <td className="px-4 py-2 whitespace-nowrap">{item.price}</td>
                                                        <td className="px-4 py-2 whitespace-nowrap">{item.quantity}</td>
                                                        <td className="px-4 py-2 whitespace-nowrap">{item.price * item.quantity}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="btn-parent flex justify-center">
                                        <Link to="/my-orders" className="btn-black">Back to My Orders</Link>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </section >
    )
}

export default OrderDetails