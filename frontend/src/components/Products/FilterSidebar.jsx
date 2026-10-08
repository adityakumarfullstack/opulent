import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const FilterSidebar = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [filters, setFilters] = useState({
        category: '',
        gender: '',
        color: '',
        size: [],
        brand: [],
        material: [],
        minPrice: 0,
        maxPrice: 100,
    })

    const [priceRange, setPriceRange] = useState([0, 100])

    const categories = ["Top Wear", "Bottom Wear"]
    const colors = ["Red", "Blue", "Green", "Yellow", "White", "Black", "Beige", "Navy"]
    const brands = ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"]
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
    const materials = ["Cotton", "Linen", "Viscose", "Silk", "Satin", "Wool", "Denim", "Nylon", "Rayon", "Chiffon"]
    const genders = ["Men", "Women"]

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]) // Convert searchParams to an object { key: value, ... }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilters({
            category: params.category || '',
            gender: params.gender || '',
            color: params.color || '',
            size: params.size?.split(',') || [],
            brand: params.brand?.split(',') || [],
            material: params.material?.split(',') || [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        })
        setPriceRange([0, params.maxPrice || 100])
    }, [searchParams])

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target

        const newFilters = { ...filters }
        if (type === 'checkbox') {
            if (checked) {
                newFilters[name] = [...newFilters[name] || [], value]
            } else {
                newFilters[name] = newFilters[name].filter(item => item !== value)
            }
        } else {
            newFilters[name] = value
        }
        setFilters(newFilters)
        updateUrlParams(newFilters)
    }

    const updateUrlParams = (newFilters) => {
        const params = new URLSearchParams()

        Object.keys(newFilters).forEach((key) => {
            if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                params.append(key, newFilters[key].join(','))
            } else if (newFilters[key]) {
                params.append(key, newFilters[key])
            }
        })
        setSearchParams(params)
        navigate(`?${params.toString()}`)
    }

    const handlePriceChange = (e) => {
        const newPrice = e.target.value;
        setPriceRange([0, newPrice]);
        const newFilters = { ...filters, maxPrice: newPrice };
        setFilters(newFilters);
        updateUrlParams(newFilters);
    }

    return (
        <div className="filter-sidebar p-4">
            <div className="filter-section">
                <div className="filter-heading">Category</div>
                <div className="filter-list">
                    {categories.map((category) => (
                        <div key={category} className="filter-item">
                            <input
                                type="radio" name="category"
                                id={category}
                                value={category}
                                checked={filters.category === category}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor={category}>{category}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter-section">
                <div className="filter-heading">Gender</div>
                <div className="filter-list">
                    {genders.map((gender) => (
                        <div key={gender} className="filter-item">
                            <input
                                name="gender"
                                type="radio"
                                id={gender}
                                value={gender}
                                checked={filters.gender === gender}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor={gender}>{gender}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter-section">
                <div className="filter-heading">Color</div>
                <div className="filter-list flex flex-wrap gap-2">
                    {colors.map((color) => (
                        <div key={color} className="filter-item">
                            <button type="button" style={{ backgroundColor: color }} name="color" value={color} onClick={handleFilterChange} className={`${filters.color === color ? 'active ring ring-1 ring-offset-2 ring-brand-red' : ''} h-6 w-6 rounded-full border border-gray-300`}></button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter-section">
                <div className="filter-heading">Price Range</div>
                <div className="price-range">
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                    />
                    <div className="price-labels flex-between">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>
            </div>
            <div className="filter-section">
                <div className="filter-heading">Size</div>
                <div className="filter-list">
                    {sizes.map((size) => (
                        <div key={size} className="filter-item">
                            <input
                                name="size"
                                type="checkbox"
                                id={size}
                                value={size}
                                checked={filters.size.includes(size)}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor={size}>{size}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter-section">
                <div className="filter-heading">Brand</div>
                <div className="filter-list">
                    {brands.map((brand) => (
                        <div key={brand} className="filter-item">
                            <input
                                name="brand"
                                type="checkbox"
                                id={brand}
                                value={brand}
                                checked={filters.brand.includes(brand)}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor={brand}>{brand}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter-section">
                <div className="filter-heading">Material</div>
                <div className="filter-list">
                    {materials.map((material) => (
                        <div key={material} className="filter-item">
                            <input
                                name="material"
                                type="checkbox"
                                id={material}
                                value={material}
                                checked={filters.material.includes(material)}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor={material}>{material}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterSidebar