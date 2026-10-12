import { Link } from "react-router-dom"

const AdminHome = () => {
    const orders = [
        {
            _id: "12345",
            user: {
                name: "John Doe",
                email: "admin@example.com",
            },
            totalPrice: 100,
            status: "Processing",
        },
        {
            _id: "67890",
            user: {
                name: "Jane Doe",
                email: "admin@example.com",
            },
            totalPrice: 200,
            status: "Delivered",
        },
        {
            _id: "98765",
            user: {
                name: "John Doe",
                email: "admin@example.com",
            },
            totalPrice: 300,
            status: "Processing",
        },
    ]

    return (
        <div className="container">
            <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="card p-4 shadow-sm rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                    <p className="text-3xl font-bold">$1000</p>
                </div>
                <div className="card p-4 shadow-sm rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
                    <p className="text-3xl font-bold">200</p>
                    <Link to="/admin/orders" className="text-blue-600 hover:text-blue-800 transition">Manage Orders</Link>
                </div>
                <div className="card p-4 shadow-sm rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Total Products</h3>
                    <p className="text-3xl font-bold">100</p>
                    <Link to="/admin/products" className="text-blue-600 hover:text-blue-800 transition">Manage Products</Link>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                <div className="recent-orders overflow-x-auto">
                    <table className="table-auto w-full border-collapse text-center">
                        <thead className="bg-gray-100 uppercase text-gray-700">
                            <tr>
                                <th className="py-2 px-4 whitespace-nowrap">Order ID</th>
                                <th className="py-2 px-4 whitespace-nowrap">User</th>
                                <th className="py-2 px-4 whitespace-nowrap">Total Price</th>
                                <th className="py-2 px-4 whitespace-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.length > 0 ? orders.map(order => (
                                    <tr key={order._id} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="py-2 px-4 whitespace-nowrap">{order._id}</td>
                                        <td className="py-2 px-4 whitespace-nowrap">{order.user.name}</td>
                                        <td className="py-2 px-4 whitespace-nowrap">{order.totalPrice}</td>
                                        <td className="py-2 px-4 whitespace-nowrap">{order.status}</td>
                                    </tr>
                                )) : <tr><td colSpan={4} className="py-2 px-4 text-center whitespace-nowrap">No orders found</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminHome