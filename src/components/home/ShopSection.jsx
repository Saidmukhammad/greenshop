import { useState, useMemo, useCallback } from "react"
import Container from "../common/Container"
import ProductGrid from "../product/ProductGrid"
import Sidebar from "../product/SideBar"
import ShopTopBar from "../product/ShopTopBar"
import Pagination from "../product/Pagination"

import { products } from "../../data/products"
import { getPriceRange } from "../../utils/getPriceRange"

const PRODUCTS_PER_PAGE = 9

const SORT_TYPES = {
  DEFAULT: 'default',
  LOW_TO_HIGH: 'low',
  HIGH_TO_LOW: 'high'
}

const TABS = {
  ALL: 'all',
  NEW: 'new',
  SALE: 'sale'
}

const ShopSection = () => {
  const { min: minPrice, max: maxPrice } = useMemo(() => getPriceRange(products), [])

  const [activeTab, setActiveTab] = useState(TABS.ALL)
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortType, setSortType] = useState(SORT_TYPES.DEFAULT)

  // Фильтрация по табам и цене
  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products) || products.length === 0) return []

    return products.filter(product => {
      // Проверка валидности продукта
      if (!product || typeof product.price !== 'number') return false

      // Фильтр по табам
      const tabFilter = 
        activeTab === TABS.NEW ? product.isNew :
        activeTab === TABS.SALE ? product.sale !== null && product.sale !== undefined :
        true

      // Фильтр по цене
      const priceFilter = product.price >= priceRange[0] && product.price <= priceRange[1]

      return tabFilter && priceFilter
    })
  }, [activeTab, priceRange])

  // Сортировка отфильтрованных продуктов
  const sortedProducts = useMemo(() => {
    if (!Array.isArray(filteredProducts) || filteredProducts.length === 0) return []

    const sorted = [...filteredProducts]
    
    switch (sortType) {
      case SORT_TYPES.LOW_TO_HIGH:
        return sorted.sort((a, b) => a.price - b.price)
      case SORT_TYPES.HIGH_TO_LOW:
        return sorted.sort((a, b) => b.price - a.price)
      case SORT_TYPES.DEFAULT:
      default:
        return sorted
    }
  }, [filteredProducts, sortType])

  // Пагинация
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE) || 1
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages)

  const startIndex = (validCurrentPage - 1) * PRODUCTS_PER_PAGE
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  )

  // Обработчики событий с мемоизацией
  const handlePriceChange = useCallback((range) => {
    if (Array.isArray(range) && range.length === 2) {
      setPriceRange(range)
      setCurrentPage(1)
    }
  }, [])

  const handleTabChange = useCallback((tab) => {
    if (Object.values(TABS).includes(tab)) {
      setActiveTab(tab)
      setCurrentPage(1)
    }
  }, [])

  const handleSortChange = useCallback((type) => {
    if (Object.values(SORT_TYPES).includes(type)) {
      setSortType(type)
      setCurrentPage(1)
    }
  }, [])

  const handlePageChange = useCallback((page) => {
    const pageNum = Number(page)
    if (pageNum >= 1 && pageNum <= Math.max(1, totalPages)) {
      setCurrentPage(pageNum)
    }
  }, [totalPages])


  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[310px_1fr] gap-8 lg:gap-12">
          
          <aside className="order-2 lg:order-1">
            <Sidebar
              min={minPrice}
              max={maxPrice}
              priceRange={priceRange}
              setPriceRange={handlePriceChange}
            />
          </aside>

          <main className="order-1 lg:order-2">
            <ShopTopBar
              activeTab={activeTab}
              setActiveTab={handleTabChange}
              sortType={sortType} 
              setSortType={handleSortChange} 
            />

            <ProductGrid products={paginatedProducts} />

            <Pagination
              totalPages={totalPages}
              currentPage={validCurrentPage}
              setCurrentPage={handlePageChange}
            />
          </main>

        </div>
      </Container>
    </section>
  )
}

export default ShopSection
