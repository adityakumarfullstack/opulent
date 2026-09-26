import { Link } from "react-router-dom"

const ProductGrid = ({ products, sectionTitle, hPadding }) => {
    return (
        <section className="product-grid-section py-10">
            <div className={`container md:${hPadding ? 'px-4' : ''}`}>
                {
                    sectionTitle &&
                    <div className="section-header">
                        <h2 className="section-title text-3xl font-bold text-center mb-4">{sectionTitle}</h2>
                    </div>
                }
                <div className="product-grid-wrapper">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {products.map((product) => (
                            <div key={product._id} className="product-card relative p-2">
                                <div className="product-item-image mb-3">
                                    <img src={product.images[0].url} alt={product.images[0].alt || product.name} className="w-full h-full object-cover object-center rounded-lg" />
                                </div>
                                <div className="product-item-info">
                                    <h3 className="product-item-title font-semibold mb-2">{product.name}</h3>
                                    <p className="product-item-price text-gray-600 text-sm">${product.price}</p>
                                </div>
                                <Link to={`/product/${product._id}`} className="product-item-link absolute top-0 left-0 w-full h-full"></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductGrid