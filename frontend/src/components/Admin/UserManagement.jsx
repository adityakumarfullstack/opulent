import { useState } from "react"

const UserManagement = () => {
    const users = [
        {
            _id: 1,
            name: "John Doe",
            email: "john@example.com",
            role: "Admin"
        }
    ]

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer"
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Reset the form
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer"
        })
    }

    const handleRoleChange = (userId, newRole) => {
        console.log(`userId: ${userId}, role: ${newRole}`);

    }

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            console.log(`Deleting user with id: ${userId}`);
        }
    }

    return (
        <div className="container">
            <h2 className="text-2xl font-bold mb-5 text-center md:text-left">User Management</h2>
            <div className="add-user-form p-5 rounded-lg mb-5">
                <h3 className="text-lg font-bold mb-3 text-center md:text-left">Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" value={formData.name} onChange={handleChange} id="name" className="form-input" placeholder="Enter name" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" value={formData.email} onChange={handleChange} id="email" className="form-input" placeholder="Enter email" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={formData.password} onChange={handleChange} id="password" className="form-input" placeholder="Enter password" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select value={formData.role} onChange={handleChange} id="role" className="form-select">
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-black">Add User</button>
                </form>
            </div>
            <div className="user-list overflow-x-auto shadow border border-gray-100 rounded-md">
                <table className="min-w-full text-gray-500 text-center">
                    <thead className="bg-gray-100 text-gray-700 uppercase border-b border-gray-200 text-sm font-semibold">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Role</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
                                <td className="px-4 py-2 whitespace-nowrap">{user.name}</td>
                                <td className="px-4 py-2 whitespace-nowrap">{user.email}</td>
                                <td className="px-4 py-2 whitespace-nowrap">
                                    <select value={user.role} onChange={(e) => handleRoleChange(user._id, e.target.value)} className="py-1 px-2 border border-gray-300 rounded">
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap">
                                    <button className="btn-theme text-sm" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserManagement