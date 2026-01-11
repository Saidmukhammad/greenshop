import ssbanner from '../../assets/img/supersalebanner.png'
import { useState, useCallback } from 'react'
import { COLOR, BUTTON_STYLES } from '../../styles/constants'

const CATEGORIES = [
  { name: 'House Plants', count: 33 },
  { name: 'Potter Plants', count: 12 },
  { name: 'Seeds', count: 65 },
  { name: 'Small Plants', count: 39 },
  { name: 'Big Plants', count: 23 },
  { name: 'Succulents', count: 17 },
  { name: 'Terrariums', count: 19 },
  { name: 'Gardening', count: 13 },
  { name: 'Accessories', count: 18 },
]

const SIZES = [
  { name: 'Small', count: 119 },
  { name: 'Medium', count: 86 },
  { name: 'Large', count: 78 },
]

const SECTION_TITLE_CLASS = 'font-bold text-lg mb-[22px] leading-4 text-[#3D3D3D]'
const FILTER_ITEM_CLASS = 'text-[15px] flex items-center justify-between cursor-pointer transition'

const FilterItem = ({ item, isSelected, onClick }) => (
  <li
    onClick={onClick}
    className={`${FILTER_ITEM_CLASS} ${
      isSelected
        ? 'text-[#46A358] font-medium'
        : 'text-[#3D3D3D] hover:text-[#46A358]'
    }`}
  >
    {item.name}
    <span>({item.count})</span>
  </li>
)

const Sidebar = ({ min, max, priceRange, setPriceRange }) => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])

  const handleCategoryChange = useCallback((categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    )
  }, [])

  const handleSizeChange = useCallback((sizeName) => {
    setSelectedSizes((prev) =>
      prev.includes(sizeName)
        ? prev.filter((s) => s !== sizeName)
        : [...prev, sizeName]
    )
  }, [])

  const handlePriceChange = useCallback(
    (e) => {
      setPriceRange([priceRange[0], Number(e.target.value)])
    },
    [priceRange, setPriceRange]
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#FBFBFB] pt-[14px] pr-6 pl-[18px] pb-[19px]">
        {/* Categories Section */}
        <div>
          <h3 className={SECTION_TITLE_CLASS}>Categories</h3>
          <ul className="flex flex-col gap-[22px]">
            {CATEGORIES.map((category) => (
              <FilterItem
                key={category.name}
                item={category}
                isSelected={selectedCategories.includes(category.name)}
                onClick={() => handleCategoryChange(category.name)}
              />
            ))}
          </ul>
        </div>

        {/* Price Range Section */}
        <div className="mt-8">
          <h3 className={SECTION_TITLE_CLASS}>Price Range</h3>

          <input
            type="range"
            min={min}
            max={max}
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full accent-[#46A358]"
            aria-label="Price range"
          />

          <p className="mt-4 text-sm text-[#3D3D3D] text-[15px] leading-4">
            Price:&nbsp;
            <span className="text-[#46A358] font-bold">
              ${priceRange[0]} – ${priceRange[1]}
            </span>
          </p>

          <button
            className={`mt-5 ${BUTTON_STYLES.primaryButton}`}
            type="button"
          >
            Filter
          </button>
        </div>

        {/* Size Section */}
        <div className="mt-8">
          <h3 className={SECTION_TITLE_CLASS}>Size</h3>
          <ul className="flex flex-col gap-[22px]">
            {SIZES.map((sizeItem) => (
              <FilterItem
                key={sizeItem.name}
                item={sizeItem}
                isSelected={selectedSizes.includes(sizeItem.name)}
                onClick={() => handleSizeChange(sizeItem.name)}
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Super Sale Banner */}
      <div className="w-full overflow-hidden rounded">
        <img
          src={ssbanner}
          alt="Super Sale Banner"
          className="w-full object-contain"
        />
      </div>
    </div>
  )
}

export default Sidebar
