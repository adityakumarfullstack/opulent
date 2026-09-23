import { useState } from "react"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";


const NavSearch = () => {
    const [seachTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        console.log(seachTerm);
        setSearchTerm('');
        setIsOpen(false);
    }

    return (
        <div className={`"nav-search item-center transition ease-in-out duration-200 ${isOpen ? 'absolute top-0 left-0 right-0 bottom-0 bg-white z-50 w-full' : 'w-auto'}`}>
            {
                isOpen ? (
                    <form onSubmit={handleSearchFormSubmit} className="item-center w-full">
                        <div className="relative w-1/2">
                            <input type="text" placeholder="Search here..." value={seachTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-gray-100 px-4 py-2 pl-3 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 " />
                            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                <HiMiniMagnifyingGlass className="inline-block h-6 w-6" />
                            </button>
                        </div>
                        <button type="button" className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black'
                            onClick={handleSearchToggle}>
                            <HiMiniXMark className="inline-block h-6 w-6" />
                        </button>
                    </form>
                ) : (
                    <button type="button" className="text-gray-700 hover:text-black" onClick={handleSearchToggle}>
                        <HiMiniMagnifyingGlass className="inline-block h-6 w-6" />
                    </button>
                )
            }
        </div>
    )
}

export default NavSearch