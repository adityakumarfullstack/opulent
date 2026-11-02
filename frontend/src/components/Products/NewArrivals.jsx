import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"


const NewArrivals = () => {
    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(false)
    const [canScrollLeft, setCanScrollLeft] = useState(true)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const newArrivals = [
        {
            _id: "1",
            name: "Stylsh Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Image 1",
                },
            ],
        },
        {
            _id: "2",
            name: "Stylsh Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Image 2",
                },
            ],
        },
        {
            _id: "3",
            name: "Stylsh Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Image 3",
                },
            ],
        },
        {
            _id: "4",
            name: "Stylsh Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Image 4",
                },
            ],
        },
        {
            _id: "5",
            name: "Stylsh Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Image 5",
                },
            ],
        },
        {
            _id: "6",
            name: "Stylsh Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Image 6",
                },
            ],
        },
        {
            _id: "7",
            name: "Stylsh Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Image 7",
                },
            ],
        },
        {
            _id: "8",
            name: "Stylsh Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Image 8",
                },
            ],
        },
    ]

    /* 
    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? - 300 : 300;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } 
    */

    const scroll = (direction) => {
        const container = scrollRef.current;

        if (!container) return;

        const firstItem = container.querySelector(".slider-item");

        if (!firstItem) return;

        const itemWidth = firstItem.getBoundingClientRect().width;
        const gap = 20; // space-x-5 = 1.25rem = 20px

        const scrollAmount =
            direction === "left"
                ? -(itemWidth + gap)
                : itemWidth + gap;

        container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    }

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
        setStartX(0);
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    }

    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if (container) {
            const leftScroll = container.scrollLeft;// get the current scroll position
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;// check if the right side is scrollable
            setCanScrollLeft(leftScroll > 0);
            setCanScrollRight(rightScrollable);

            // const { scrollLeft, scrollWidth, clientWidth } = container;
            // setCanScrollLeft(scrollLeft > 0);
            // setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    }

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", updateScrollButtons);
            }
        }
    }, []);

    return (
        <section className="new-arrivals">
            <div className="container">
                <div className="text-center relative mb-10">
                    <div className="section-header mb-8">
                        <h2 className="section-title text-3xl font-bold mb-4">Explore New Arrivals</h2>
                        <p className="text-lg text-gray-600">Discover the latest styles off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.</p>
                    </div>
                    <div className="new-arrivals-slider relative">
                        <div className="scroll-btn-parent flex items-center justify-end gap-3">
                            <button disabled={!canScrollLeft} onClick={() => scroll("left")} className={`scroll-btn scroll-left p-2 rounded border border-gray-300 ${canScrollLeft ? "bg-white text-black hover:bg-gray-50 hover:border-gray-400 transition ease-in duration-200" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}>
                                <FiChevronLeft className="text-2xl" />
                            </button>
                            <button disabled={!canScrollRight} onClick={() => scroll("right")} className={`scroll-btn scroll-right p-2 rounded border border-gray-300 ${canScrollRight ? "bg-white text-black hover:bg-gray-50 hover:border-gray-400 transition ease-in duration-200" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}>
                                <FiChevronRight className="text-2xl" />
                            </button>
                        </div>
                        <div ref={scrollRef} className={`slider-item-parent flex space-x-5 lg:space-x-6 overflow-x-scroll scrollbar-none relative mt-5 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUpOrLeave} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUpOrLeave}>
                            {newArrivals.map((product) => {
                                return (
                                    <div className="slider-item relative min-w-[100%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[30%] rounded-lg overflow-hidden" key={product._id}>
                                        <div className="slider-item-img-parent">
                                            <img src={product.images[0]?.url} alt={product.images[0]?.altText || product.name} className="slider-item-img w-full" draggable='false' />
                                        </div>
                                        <div className="slider-item-content p-3 absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm text-white text-left">
                                            <Link to={`/product/${product._id}`} className="slider-item-link block">
                                                <h3 className="slider-item-title font-medium text-lg">{product.name}</h3>
                                                <p className="slider-item-price">${product.price}</p>
                                            </Link>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewArrivals