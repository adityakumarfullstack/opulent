import { Link } from 'react-router-dom'
import mensCollectionImage from '../../assets/mens-collection.webp'
import womensCollectionImage from '../../assets/womens-collection.webp'


const GenderCollectionSection = () => {
    return (
        <section className="gender-collection-section py-16">
            <div className="container flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className='w-full md:w-1/2'>
                    <div className='collection-item relative'>
                        <div className="img-parent">
                            <img src={mensCollectionImage} alt="mens collection" className="w-full aspect-square object-cover object-center" />
                        </div>
                        <div className="content absolute bottom-5 left-5 md:bottom-7 md:left-7 bg-white flex flex-col justify-center p-4">
                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 uppercase">Men's Collection</h2>
                            <Link to="/collection/all?gender=Men" className="text-gray-900 underline">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='collection-item relative'>
                        <div className="img-parent">
                            <img src={womensCollectionImage} alt="womens collection" className="w-full aspect-square object-cover object-center" />

                        </div>
                        <div className="content absolute bottom-5 left-5 md:bottom-7 md:left-7 bg-white flex flex-col justify-center p-4">
                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 uppercase">Women's Collection</h2>
                            <Link to="/collection/all?gender=Women" className="text-gray-900 underline">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenderCollectionSection