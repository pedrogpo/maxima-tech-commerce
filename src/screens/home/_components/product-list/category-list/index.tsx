'use client'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { Categories } from '~/core/constants/categories'
import { categoryStore } from '~/store/product-list/category'

interface ICategoryBox {
  category: Categories
  image: string
}

const CategoryBox = observer(({ category, image }: ICategoryBox) => {
  const { setSelectedCategory } = categoryStore

  return (
    <button
      onClick={() => {
        setSelectedCategory(category)
      }}
      className="flex cursor-pointer flex-col items-center justify-center gap-4 text-center outline-gray-600"
    >
      <Image
        src={image}
        width={100}
        height={100}
        alt={category}
        className="h-[100px] min-h-[100px] w-[100px] min-w-[100px] rounded-full object-cover"
      />
      <span className="text-xl font-bold text-gray-900">{category}</span>
    </button>
  )
})

export default function CategoryList() {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-8">
      <CategoryBox
        image="https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/shoes/shoes-1.jpg"
        category="Tênis"
      />
      <CategoryBox
        image="https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/tshirts/tshirt-1.jpg"
        category="Camisetas"
      />
      <CategoryBox
        image="https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/pants/pant-1.jpg"
        category="Calças"
      />
    </div>
  )
}
