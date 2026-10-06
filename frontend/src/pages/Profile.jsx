import MyOrders from "./MyOrders"

const Profile = () => {
    return (
        <section className="profile-page py-16 min-h-[50vh]">
            <div className="container flex flex-col md:flex-row gap-4">
                {/* Left Side */}
                <div className="profile-left w-full md:w-1/3 lg:w-1/4 border border-gray-300 rounded-lg p-4 md:p-6 lg:p-8">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-3">John Doe</h2>
                    <p className="text-gray-600 mb-3">Email: john@example.com</p>
                    <button type="button" className="btn-theme w-full">Logout</button>
                </div>

                {/* Right Side */}
                <div className="profile-right w-full md:w-2/3 lg:w-3/4 border border-gray-300 rounded-lg p-4 md:p-6 lg:p-8">
                    <MyOrders />
                </div>
            </div>
        </section >
    )
}

export default Profile