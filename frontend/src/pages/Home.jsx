import FeaturedCollection from "../components/Products/FeaturedCollection"
import GenderCollectionSection from "../components/Products/GenderCollectionSection"
import NewArrivals from "../components/Products/NewArrivals"
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from "../components/Products/ProductGrid"
import FeaturesSection from "../components/UiLayout/FeaturesSection"
import Hero from "../components/UiLayout/Hero"

const placeholderProducts = [
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

const Home = () => {
    return (
        <>
            <Hero />
            <GenderCollectionSection />
            <NewArrivals />
            <ProductDetails sectionTitle="Best Seller" />
            <ProductGrid sectionTitle="Top Wears for Women" products={placeholderProducts} />
            <FeaturedCollection />
            <FeaturesSection />
        </>
    )
}

export default Home