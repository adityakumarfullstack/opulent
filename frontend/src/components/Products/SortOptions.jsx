import { useSearchParams } from 'react-router-dom'

const SortOptions = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const handleSortChange = (e) => {
        const sortBy = e.target.value
        if (sortBy === 'default') {
            searchParams.delete('sortBy')
        } else {
            searchParams.set('sortBy', sortBy)
        }
        setSearchParams(searchParams)
    }
    return (
        <div className='sort-options mb-3 flex items-center justify-end'>
            <div className="sort-label mr-3 hidden lg:block">Sort By:</div>
            <div className="sort-select">
                <select name="sort" id="sort" className="sort-dropdown px-2 py-1.5 border border-gray-300 text-gray-900 text-sm md:text-base outline-none focus:ring-blue-500 block" value={searchParams.get("sortBy") || ""} onChange={handleSortChange}>
                    <option value="">Default</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="popularity">Popuilarity</option>
                </select>
            </div>
        </div>
    )
}

export default SortOptions