import { RiDeleteBin3Line } from "react-icons/ri"


const CartContents = () => {
    const cartProducts = [
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
    ]
    return (
        <div>
            {
                cartProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} className="w-20 h-24 object-cover rounded" />
                            </div>
                            <div className="product-details">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-600">Size: {product.size} | Color: {product.color}</p>
                                <div className="quantity flex items-center mt-2">
                                    <button type="button" className="border border-gray-300 rounded px-2 py-1 text-lg font-medium">-</button>
                                    <span className="mx-2">{product.quantity}</span>
                                    <button type="button" className="border border-gray-300 rounded px-2 py-1 text-lg font-medium">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-price text-right">
                            <p className="text-lg font-semibold">${product.price}</p>
                            <button type="button">
                                <RiDeleteBin3Line className="inline-block h-6 w-6 text-red-600" />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CartContents