import { Link } from 'react-router-dom'
import heroImg from '../../assets/hero.webp'

const Hero = () => {
    return (
        <section className="hero-section relative">
            <div className="hero-img-parent">
                <img src={heroImg} alt="hero image" className="hero-img w-full" />
            </div>
            <div className="hero-content-parent absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50">
                <h1 className="text-3xl md:text-5xl lg:text-9xl font-bold text-white  uppercase mb-3">Vacation <br />Ready</h1>
                <p className="text-white text-sm md:text-lg  mb-6">Explore our vaction-ready outfits with fast worldwide shipping.</p>
                <div className="hero-actions">
                    <Link to="#" className="bg-white text-gray-900 px-6 py-2 rounded-sm text-lg hover:shadow-lg transition ease-in duration-200">Shop Now</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero