import { LiaShippingFastSolid } from "react-icons/lia";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { VscCreditCard } from "react-icons/vsc";



const FeaturesSection = () => {
    return (
        <section className="featured-section pb-16">
            <div className="container">
                <div className="featured-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5">
                    <div className="feature-item flex flex-col items-center text-center border border-gray-200 p-3 lg:py-6 rounded-xl bg-gray-50">
                        <div className="icon-parent p-3 rounded-full mb-3 bg-white border border-gray-100">
                            <LiaShippingFastSolid className="feature-icon text-2xl" />
                        </div>
                        <h3 className="feature-title text-lg font-semibold mb-2 capitalize">Free international shipping</h3>
                        <p className="feature-description text-sm text-gray-600">On all orders over $100.</p>
                    </div>
                    <div className="feature-item flex flex-col items-center text-center border border-gray-200 p-3 lg:py-6 rounded-xl bg-gray-50">
                        <div className="icon-parent p-4 rounded-full mb-3 p-3 rounded-full mb-3 bg-white border border-gray-100">
                            <HiArrowPathRoundedSquare className="feature-icon text-2xl" />
                        </div>
                        <h3 className="feature-title text-lg font-semibold mb-2 capitalize">45 Days return</h3>
                        <p className="feature-description text-sm text-gray-600">Money back guarantee</p>
                    </div>
                    <div className="feature-item flex flex-col items-center text-center border border-gray-200 p-3 lg:py-6 rounded-xl bg-gray-50">
                        <div className="icon-parent p-4 rounded-full mb-3 p-3 rounded-full mb-3 bg-white border border-gray-100">
                            <VscCreditCard className="feature-icon text-2xl" />
                        </div>
                        <h3 className="feature-title text-lg font-semibold mb-2 capitalize">Secure Checkout</h3>
                        <p className="feature-description text-sm text-gray-600">100% secure payment</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection