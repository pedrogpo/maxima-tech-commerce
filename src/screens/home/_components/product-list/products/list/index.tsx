'use client'
import { observer } from 'mobx-react-lite'
import { IProduct } from '~/interfaces/api/products'
import { categoryStore } from '~/store/product-list/category'
import { useEffect, useState } from 'react'
import { orderProductStore } from '~/store/product-list/order'
import { Pagination, ProductCard } from '~/_components/molecules'

interface IListProducts {
  cachedProductList: IProduct[]
}

const LIMIT_PER_PAGE = 5

export const ListProducts = observer(({ cachedProductList }: IListProducts) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { selectedCategory } = categoryStore
  const { selectedType: selectedOrderType } = orderProductStore

  const filteredProducts = cachedProductList
    .filter((product) => {
      if (!selectedCategory) return true

      return product.category === selectedCategory
    })
    .sort((a, b) => {
      if (selectedOrderType === 'name') {
        return a.name.localeCompare(b.name)
      }
      if (selectedOrderType === 'price') {
        return a.price - b.price
      }
      if (selectedOrderType === 'category') {
        return a.category.localeCompare(b.category)
      }

      return 0
    })

  const totalPages = Math.ceil(filteredProducts.length / LIMIT_PER_PAGE)
  const startIndex = (currentPage - 1) * LIMIT_PER_PAGE
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + LIMIT_PER_PAGE,
  )

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // reset pages when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  return (
    <div className="flex flex-col gap-8">
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  )
})
