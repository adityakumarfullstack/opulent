const checkout = {
    _id: "checkout123",
    createdAt: new Date(),
    checkoutItems: [
        {
            name: "Stylsh Jacket 1",
            image: "https://picsum.photos/500/500?random=1",
            size: "L",
            color: "Red",
            price: 120,
            quantity: 1,
        },
        {
            name: "Stylsh Jacket 2",
            image: "https://picsum.photos/500/500?random=2",
            size: "L",
            color: "Red",
            price: 120,
            quantity: 1,
        },
        {
            name: "Stylsh Jacket 3",
            image: "https://picsum.photos/500/500?random=3",
            size: "L",
            color: "Red",
            price: 120,
            quantity: 1,
        },
    ],
    shippingAddress: {
        firstName: "John",
        lastName: "Doe",
        address: "123 Main St",
        city: "New York",
        zip: "10001",
        country: "United States",
    },
}

export const OrderConfirmation = () => {
    const calculateEstimatedDelivery = (date) => {
        const orderDate = new Date(date);
        orderDate.setDate(orderDate.getDate() + 10);
        return orderDate.toLocaleDateString();
    };

    return (
        <section className="order-confirmation-page py-10">
            <div className="container">
                <div className="order-confirmation-content max-w-4xl mx-auto p-6">
                    <h2 className="text-2xl font-bold mb-4 text-center mb-6 text-emerald-600">Thank you for your order</h2>
                    {
                        checkout && (
                            <div className="order-details p-4 md:p-6 border border-gray-300 rounded-lg">
                                <div className="flex justify-between mb-15">
                                    <div>
                                        <h3 className="text-xl font-semibold">Order ID: {checkout._id}</h3>
                                        <p className="text-gray-600">Date: {new Date(checkout.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-emerald-600">Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}</p>
                                    </div>

                                </div>
                                <div className="order-items mb-15">
                                    {
                                        checkout.checkoutItems.map((item) => (
                                            <div key={item._id} className="flex justify-between mb-3">
                                                <div className="flex">
                                                    <div className="product-image">
                                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                                    </div>
                                                    <div className="product-details ml-4">
                                                        <h4 className="text-md font-semibold mb-1">{item.name}</h4>
                                                        <p className="text-sm text-gray-600">{item.color} | {item.size}</p>
                                                    </div>
                                                </div>
                                                <div className="product-quantity">
                                                    <p className="text-md font-medium mb-1">${item.price}</p>
                                                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="order-payment">
                                        <h4 className="text-lg font-semibold mb-2">Payment</h4>
                                        <p className="text-sm text-gray-600">Razorpay</p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                                        <p className="text-sm text-gray-600">{checkout.shippingAddress.address} <br /> {checkout.shippingAddress.city}, {checkout.shippingAddress.state}, {checkout.shippingAddress.zip}, {checkout.shippingAddress.country}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
