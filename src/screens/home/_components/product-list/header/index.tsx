'use client'

import { BiX } from 'react-icons/bi'
import { Button } from '~/_components/ui/button'
import { HiMiniArrowsUpDown } from 'react-icons/hi2'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/_components/ui/dropdown-menu'
import { observer } from 'mobx-react-lite'
import { categoryStore } from '~/store/product-list/category'

function OrderProducts() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 text-xl font-bold text-gray-900">
        Ordernar por
        <HiMiniArrowsUpDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Ordernar por</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Nome</DropdownMenuItem>
        <DropdownMenuItem>Preço</DropdownMenuItem>
        <DropdownMenuItem>Categoria</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const SelectedCategory = observer(() => {
  const { selectedCategory, resetSelectedCategory } = categoryStore

  if (!selectedCategory) return null

  return (
    <div className="flex items-center gap-2.5 rounded-sm bg-gray-200 px-3 py-1.5 text-base font-semibold text-gray-900">
      <span>{selectedCategory}</span>
      <button className="outline-gray-500">
        <BiX
          size={16}
          onClick={() => {
            resetSelectedCategory()
          }}
        />
      </button>
    </div>
  )
})

export function ListHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <h2 className="text-4xl font-bold text-gray-900">Lista de produtos</h2>
        <SelectedCategory />
      </div>
      <div className="flex items-center gap-4">
        <OrderProducts />
      </div>
    </div>
  )
}
