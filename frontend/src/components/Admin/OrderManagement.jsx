const OrderManagement = () => {
    const orders = [
        {
            _id: "12345",
            user: {
                name: "John Doe",
                email: "admin@example.com",
            },
            totalPrice: 100,
            status: "Processing",
        }
    ]

    const handleStatusChange = (orderId, newStatus) => {
        console.log("Order ID:", orderId, "New Status:", newStatus)
    }

    return (
        <div className="container ">
            <h2 className="text-2xl font-bold mb-3">Order Management</h2>
            <div className="order-list overflow-x-auto shadow-md rounded w-full">
                <table className="w-full min-w-max text-gray-500 text-center">
                    <thead className="bg-gray-100 text-sm text-gray-700 uppercase border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 whitespace-nowrap">Order ID</th>
                            <th className="px-6 py-3 whitespace-nowrap">User</th>
                            <th className="px-6 py-3 whitespace-nowrap">Total Price</th>
                            <th className="px-6 py-3 whitespace-nowrap">Status</th>
                            <th className="px-6 py-3 whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order._id}>
                                        <td className="py-2 px-4 whitespace-nowrap font-medium">#{order._id}</td>
                                        <td className="py-2 px-4 whitespace-nowrap">{order.user.name}</td>
                                        <td className="py-2 px-4 whitespace-nowrap">${order.totalPrice}</td>
                                        <td className="py-2 px-4 whitespace-nowrap">
                                            <select value={order.status} onChange={(e) => handleStatusChange(order._id, e.target.value)} className="form-select min-w-max">
                                                <option value="Processing">Processing</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="py-2 px-4 whitespace-nowrap">
                                            <button type="button" onClick={() => handleStatusChange(order._id, "Delivered")} className="bg-green-500 hover:bg-green-600 transition-colors duration-300 ease-in-out text-white py-1 px-2 rounded">
                                                Mark as Delivered
                                            </button>
                                        </td>
                                    </tr>
                                ))) : (
                                <tr>
                                    <td colSpan="5" className="py-2 px-4 whitespace-nowrap">No orders found.</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderManagement