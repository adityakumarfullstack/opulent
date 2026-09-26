import { useEffect, useState } from "react"
import { toast } from "sonner"
import ProductGrid from "./ProductGrid"

const selectedProduct = {
    name: "Stylish Product",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish product with a unique design and high quality materials. It is perfect for any occasion and can be used for both casual and formal wear.",
    brand: "Stylish Brand",
    material: "Leather",
    colors: ["Black", "Red"],
    sizes: ["S", "M", "L"],
    images: [
        {
            url: "https://picsum.photos/500?random=1",
            alt: "Product thumb 1"
        },
        {
            url: "https://picsum.photos/500?random=2",
            alt: "Product thumb 2"
        },
        {
            url: "https://picsum.photos/500?random=3",
            alt: "Product thumb 3"
        }
    ]
}

const similarProducts = [
    {
        _id: 1,
        name: "Stylish Product 1",
        price: 100,
        originalPrice: 150,
        images: [
            {
                url: "https://picsum.photos/500?random=4",
                alt: "Product thumb 1"
            },
        ]
    },
    {
        _id: 2,
        name: "Stylish Product 2",
        price: 120,
        originalPrice: 150,
        images: [
            {
                url: "https://picsum.photos/500?random=5",
                alt: "Product thumb 2"
            },
        ]
    },
    {
        _id: 3,
        name: "Stylish Product 3",
        price: 120,
        originalPrice: 150,
        images: [
            {
                url: "https://picsum.photos/500?random=6",
                alt: "Product thumb 3"
            },
        ]
    },
    {
        _id: 4,
        name: "Stylish Product 4",
        price: 120,
        originalPrice: 150,
        images: [
            {
                url: "https://picsum.photos/500?random=7",
                alt: "Product thumb 4"
            },
        ]
    }
]

const ProductDetails = ({ sectionTitle }) => {
    const [mainImage, setMainImage] = useState('')
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);


    const handleImageClick = (image) => {
        setMainImage(image)
    }

    const handleQuantityChange = (action) => {
        if (action === 'increment') {
            setQuantity(quantity + 1);
        } else if (action === 'decrement' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            toast.error("Please select a color and size before adding to cart.", {
                duration: 2000,
            });
            return;
        }
        setIsButtonDisabled(true);

        setTimeout(() => {
            setIsButtonDisabled(false);
            toast.success("Product added to cart successfully.", {
                duration: 1500,
            });
        }, 1000);
    }

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url)
        }
    }, [selectedProduct])

    return (
        <>
            <section className="product-details py-4 py-lg-6">
                <div className="container">
                    {
                        sectionTitle &&
                        <div className="section-header">
                            <h2 className="section-title text-3xl font-bold text-center mb-4">{sectionTitle}</h2>
                        </div>
                    }
                    <div className="product-details-wrapper flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/5 lg:w-1/2 product-details-left flex flex-col md:flex-row gap-2">
                            <div className="product-thumb flex md:flex-col gap-2 order-2 md:order-0 overflow-x-auto scrollbar-hide md:overflow-x-hidden md:overflow-y-auto">
                                {selectedProduct.images.map((image, index) => (
                                    <div className={`product-thumb-item rounded-lg overflow-hidden border ${mainImage === image.src ? "border-black" : "border-gray-300"}`} key={index} onClick={() => handleImageClick(image.src)}>
                                        <img src={image.url} alt={image.alt || `Product thumb ${index + 1}`} className="w-20 h-20 object-cover object-center cursor-pointer" />
                                    </div>
                                ))}
                            </div>
                            <div className="product-image-main rounded-lg overflow-hidden">
                                <img src={mainImage} alt="Main Product" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                        <div className="md:w-2/5 lg:w-1/2 product-details-right flex flex-col gap-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">{selectedProduct.name}</h2>
                            <div className="product-price flex items-center gap-4">
                                <span className="text-xl font-bold text-gray-600">${selectedProduct.price}</span>
                                <span className="text-gray-500 line-through">${selectedProduct.originalPrice}</span>
                            </div>
                            <p className="text-gray-600">{selectedProduct.description}</p>
                            <div className="product-colors">
                                <p className="text-gray-700">Colors:</p>
                                <div className="colors flex items-center gap-2 mt-2">
                                    {selectedProduct.colors.map((color) => (
                                        <button className={`inline-block w-6 h-6 rounded-full cursor-pointer border-3 border-white transition ease-in duration-200 ${selectedColor === color ? "ring ring-rose-500" : ""}`} key={color} onClick={() => setSelectedColor(color)} style={{ backgroundColor: color.toLocaleLowerCase(), filter: "brightness(0.9)" }}></button>
                                    ))}
                                </div>
                            </div>
                            <div className="product-sizes">
                                <p className="text-gray-700">Sizes:</p>
                                <div className="sizes flex items-center gap-2 mt-2">
                                    {selectedProduct.sizes.map((size) => (
                                        <button className={`inline-block text-sm font-semibold px-4 py-2 rounded border border-gray-300 cursor-pointer transition ease-in duration-200 ${selectedSize === size ? "bg-black text-white" : ""}`} key={size} onClick={() => setSelectedSize(size)}>{size}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="product-quantity">
                                <p className="text-gray-700">Quantity:</p>
                                <div className="quantity flex items-center gap-2 mt-2">
                                    <button onClick={() => handleQuantityChange("decrement")} className="text-gray-600 px-3 py-1 border border-gray-300 cursor-pointer rounded bg-gray-200 hover:bg-gray-100 transition ease-in duration-200">-</button>
                                    <span className="text-gray-600 px-2 py-1">{quantity}</span>
                                    <button onClick={() => handleQuantityChange("increment")} className="text-gray-600 px-3 py-1 border border-gray-300 cursor-pointer rounded bg-gray-200 hover:bg-gray-100 transition ease-in duration-200">+</button>
                                </div>
                            </div>
                            <div className="product-actions flex items-center gap-2">
                                <button onClick={handleAddToCart} disabled={isButtonDisabled} className={`bg-black text-white px-6 py-2 rounded text-lg hover:shadow-lg transition ease-in duration-200 w-full ${isButtonDisabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}>{isButtonDisabled ? "Adding..." : "Add to Cart"}</button>
                            </div>
                            <div className="product-meta">
                                <h3 className="text-gray-700 font-semibold mb-2">Characteristics:</h3>
                                <table className="w-full text-sm text-left text-gray-500">
                                    <tbody>
                                        <tr>
                                            <td className="text-gray-700 py-1">Brand:</td>
                                            <td className="py-1">{selectedProduct.brand}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-gray-700 py-1">Material:</td>
                                            <td className="py-1">{selectedProduct.material}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductGrid products={similarProducts} sectionTitle="You May Also Like" hPadding="px-6" />
        </>
    )
}

export default ProductDetails