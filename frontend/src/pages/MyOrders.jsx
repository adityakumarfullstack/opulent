import { useEffect, useState } from "react"

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        //Simulate Orders
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: "12345",
                    createdAt: new Date(),
                    shippingAddress: {
                        address: "123 Main St",
                        city: "New York",
                        country: "USA"
                    },
                    orderItems: [
                        {
                            name: "Stylsh Jacket 1",
                            image: "https://picsum.photos/500/500?random=1",

                        }
                    ],
                    totalPrice: 120,
                    isPaid: true,
                },
                {
                    _id: "23456",
                    createdAt: new Date(),
                    shippingAddress: {
                        address: "123 Main St",
                        city: "New York",
                        country: "USA"
                    },
                    orderItems: [
                        {
                            name: "Stylsh Jacket 2",
                            image: "https://picsum.photos/500/500?random=2",

                        }
                    ],
                    totalPrice: 120,
                    isPaid: true,
                }
            ]
            setOrders(mockOrders);
        }, 2000)
    }, [])

    return (
        <div className="my-orders max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">My Orders</h2>
            <div className="order-list relative overflow-x-auto rounded border border-gray-200">
                <table className="w-full text-center text-gray-900">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 sm:py-3 whitespace-nowrap">
                                Image
                            </th>
                            <th className="px-4 py-2 sm:py-3 whitespace-nowrap">
                                Order ID
                            </th>
                            <th className="px-4 py-2 sm:py-3 whitespace-nowrap">
                                Created
                            </th>
                            <th className="px-4 py-2 sm:py-3 whitespace-nowrap">
                                Shipping Address
                            </th>
                            <th className="px-4 py-2 sm:py-3 whitespace-nowrap">
                                Items
                            </th>
                            <th className="px-4 py-2 sm:py-3 whitespace-nowrap">
                                Price
                            </th>
                            <th className="px-4 py-2 sm:py-3 whitespace-nowrap">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? orders.map((order) => (
                            <tr key={order._id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-2 py-2 sm:py-3 whitespace-nowrap">
                                    <img src={order.orderItems[0].image} alt={order.orderItems[0].name} className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-md" />
                                </td>
                                <td className="px-2 py-2 sm:py-3 whitespace-nowrap">
                                    {order._id}
                                </td>
                                <td className="px-2 py-2 sm:py-3 whitespace-nowrap">
                                    {new Date(order.createdAt).toLocaleDateString()}
                                    {" "}
                                    {new Date(order.createdAt).toLocaleTimeString()}
                                </td>
                                <td className="px-2 py-2 sm:py-3 whitespace-nowrap">
                                    {order.shippingAddress
                                        ? [
                                            order.shippingAddress.address,
                                            order.shippingAddress.city,
                                            order.shippingAddress.country
                                        ]
                                            .filter(Boolean)
                                            .join(", ")
                                        : "N/A"
                                    }
                                </td>
                                <td className="px-2 py-2 sm:py-3 whitespace-nowrap">
                                    {order.orderItems.length}
                                </td>
                                <td className="px-2 py-2 sm:py-3 whitespace-nowrap">
                                    ${order.totalPrice}
                                </td>
                                <td className="px-2 py-2 sm:py-3 whitespace-nowrap">
                                    <span className={`px-2 py-1 rounded text-xs sm:text-sm font-medium ${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{order.isPaid ? "Paid" : "Pending"}</span>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="7" className="px-2 py-2 sm:py-3 whitespace-nowrap text-center">
                                    No orders found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyOrders