import { Link } from "react-router-dom"


const ProductManagement = () => {
    const products = [
        {
            _id: 1,
            name: "Product 1",
            price: 100,
            sku: "sku-1",
        }
    ]

    const handleProductDelete = (id) => {
        if (window.confirm("Are you sure you want to delete the product?")) {
            console.log("Delete product with id:", id)
        }
    }

    return (
        <div className="container">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Product Management</h2>
            <div className="product-list overflow-x-auto shadow-md rounded-md">
                <table className="min-w-full border-collapse text-gray-500 text-center">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Price</th>
                            <th className="py-2 px-4">SKU</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 ?
                                products.map((product) => (
                                    <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-50 transition ease-in-out duration-300">
                                        <td className="py-2 px-4 whitespace-nowrap">{product.name}</td>
                                        <td className="py-2 px-4 whitespace-nowrap">${product.price}</td>
                                        <td className="py-2 px-4 whitespace-nowrap">{product.sku}</td>
                                        <td className="py-2 px-4 whitespace-nowrap flex-center">
                                            <Link to={`/admin/products/${product._id}/edit`} className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded transition ease-in-out duration-300 mr-2">Edit</Link>
                                            <button className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded transition ease-in-out duration-300" onClick={() => handleProductDelete(product._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                                :
                                <tr>
                                    <td colSpan="4" className="py-2 px-4">No products found</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductManagement