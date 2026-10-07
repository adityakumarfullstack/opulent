import { useEffect, useRef, useState } from "react"
import { FaFilter } from "react-icons/fa"
import FilterSidebar from "../components/Products/FilterSidebar"
import SortOptions from "../components/Products/SortOptions"
import ProductGrid from "../components/Products/ProductGrid"

const Collection = () => {
    const [products, setProducts] = useState([])
    const sidebarRef = useRef(null)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    }

    const handleClickOutside = (event) => {
        // Check if the click event occurred outside the sidebar
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false)
        }
    }

    useEffect(() => {
        // Add a click event listener to the document
        document.addEventListener("click", handleClickOutside)
        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
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
                },
            ];
            setProducts(fetchedProducts)
        }, 1000);
    }, [])

    return (
        <section className="collection-page py-16">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-3">
                    {/* Mobile Filter Button */}
                    <div className="lg:hidden btn-parent flex-between">
                        <button type="button" onClick={(event) => { event.stopPropagation(); toggleSidebar(); }} className="flex-center gap-2 border border-gray-300 px-4 py-2 text-sm"><FaFilter /> Filter</button>
                        <div className="sort-options-parent">
                            <SortOptions />
                        </div>
                    </div>
                    {/* Filter Sidebar */}
                    <div className={`filter-sidebar-parent ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 bottom-0 w-2/3 md:w-2/5 h-full overflow-y-auto bg-white z-50 transition-transform ease-in-out duration-300 lg:translate-x-0 lg:static shadow-lg lg:shadow-none`} ref={sidebarRef}>
                        <FilterSidebar />
                    </div>

                    {/* Product List */}
                    <div className="product-list flex-1 p-4">
                        <h2 className="text-2xl font-bold mb-4">All Collection</h2>
                        <SortOptions />
                        <ProductGrid products={products} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection