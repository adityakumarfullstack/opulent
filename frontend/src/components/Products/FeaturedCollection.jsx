import { Link } from "react-router-dom"
import featured from "../../assets/featured.webp"

const FeaturedCollection = () => {
    return (
        <section className="featured-collection-section  py-16">
            <div className="container">
                <div className="flex flex-col flex-col-reverse lg:flex-row items-center rounded-2xl bg-green-50 gap-5 p-4 border border-gray-200">
                    <div className="featured-collection-left lg:w-1/2 text-center lg:text-left md:px-4 tracking-tight">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Comfort and Style</h4>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                            Apparel made for your everyday life
                        </h2>
                        <p className="text-lg text-gray-600 mb-5">
                            Discover high-quality, comfortable apparel that effortlessly blends your fashion an function. Designed to make you look and feel great every day.
                        </p>
                        <Link to="/collection/all" className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg hover:shadow-lg transition ease-in duration-200">Shop Now</Link>
                    </div>
                    <div className="featured-collection-right lg:w-1/2">
                        <div className="featured-image rounded-xl overflow-hidden">
                            <img src={featured} alt="featured collection" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection