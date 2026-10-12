import { Link } from "react-router-dom"

const AdminHome = () => {
    const order = [
        {
            _id: "12345",
            user: {
                name: "John Doe",
                email: "admin@example.com",
            },
            totalPrice: 100,
            status: "Processing",
        },
    ]

    return (
        <div className="container">
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card p-4 shadow-md rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold mb-2">Revenue</h3>
                    <p className="text-3xl font-bold">$1000</p>
                </div>
                <div className="card p-4 shadow-md rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold mb-2">Total Orders</h3>
                    <p className="text-3xl font-bold">200</p>
                    <Link to="/admin/orders" className="text-blue-600 hover:text-blue-800 transition">Manage Orders</Link>
                </div>
                <div className="card p-4 shadow-md rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold mb-2">Total Products</h3>
                    <p className="text-3xl font-bold">100</p>
                    <Link to="/admin/products" className="text-blue-600 hover:text-blue-800 transition">Manage Products</Link>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default AdminHome