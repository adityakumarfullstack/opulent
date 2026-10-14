import { useState } from "react"

const EditProduct = () => {
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: 0,
        countInStock: 0,
        sku: "",
        category: "",
        brand: "",
        material: "",
        colors: [],
        sizes: [],
        collections: "",
        gender: "",
        images: [
            {
                url: "https://picsum.photos/500?random=1",
            },
            {
                url: "https://picsum.photos/500?random=2",
            },
            {
                url: "https://picsum.photos/500?random=3",
            },
        ],
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProductData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleImageUpload = async (e) => {
        const files = Array.from(e.target.files)
        setProductData((prevData) => ({
            ...prevData,
            images: files.map(file => ({ url: URL.createObjectURL(file) }))
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log(productData);

    }

    return (
        <div className="container">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Edit Product</h2>
            <div className="edit-product-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" className="form-input" name="name" value={productData.name} onChange={handleChange} placeholder="Enter product name" required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea id="description" className="form-input" name="description" rows={4} value={productData.description} onChange={handleChange} placeholder="Enter product description" required></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="price" className="form-label">Price (USD)</label>
                        <input type="number" id="price" className="form-input" name="price" value={productData.price} onChange={handleChange} placeholder="Enter product price" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="countInStock" className="form-label">Count in Stock</label>
                        <input type="number" id="countInStock" className="form-input" name="countInStock" value={productData.countInStock} onChange={handleChange} placeholder="Enter count in stock" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="sku" className="form-label">SKU</label>
                        <input type="text" id="sku" className="form-input" name="sku" value={productData.sku} onChange={handleChange} placeholder="Enter product SKU" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="sizes" className="form-label">Sizes (separated by commas)</label>
                        <input type="text" id="sizes" className="form-input" name="sizes" value={productData.sizes.join(',')} onChange={(e) => setProductData({ ...productData, sizes: e.target.value.split(',').map(size => size.trim()) })} placeholder="Enter product sizes" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="colors" className="form-label">Colors (separated by commas)</label>
                        <input type="text" id="colors" className="form-input" name="colors" value={productData.colors.join(',')} onChange={(e) => setProductData({ ...productData, colors: e.target.value.split(',').map(color => color.trim()) })} placeholder="Enter product colors" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="uploadImages" className="form-label">Upload Images</label>
                        <input type="file" id="uploadImages" className="form-file" name="images" multiple onChange={handleImageUpload} />
                        <div className="preview-images flex flex-wrap gap-3 mt-3">
                            {productData.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image.url} alt={image.altText || "Product Image"} className="w-20 h-20 object-cover rounded shadow" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="collections" className="form-label">Collections</label>
                        <input type="text" id="collections" className="form-input" name="collections" value={productData.collections} onChange={handleChange} placeholder="Enter product collections" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <input type="text" id="gender" className="form-input" name="gender" value={productData.gender} onChange={handleChange} placeholder="Enter product gender" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="text" id="category" className="form-input" name="category" value={productData.category} onChange={handleChange} placeholder="Enter product category" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="brand" className="form-label">Brand</label>
                        <input type="text" id="brand" className="form-input" name="brand" value={productData.brand} onChange={handleChange} placeholder="Enter product brand" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="material" className="form-label">Material</label>
                        <input type="text" id="material" className="form-input" name="material" value={productData.material} onChange={handleChange} placeholder="Enter product material" />
                    </div>
                    <button type="submit" className="btn-black">Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default EditProduct