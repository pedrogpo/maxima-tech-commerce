'use client'

import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { BiShoppingBag } from 'react-icons/bi'
import { Button } from '~/_components/ui/button'
import useCart from '~/hooks/useCart'

export const ShoppingBag = observer(() => {
  const { currentItems } = useCart()

  return (
    <Link href="/cart">
      <Button variant="ghost" aria-label="Carrinho">
        <div className="relative">
          <BiShoppingBag size={24} />
          {currentItems.length > 0 && (
            <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white">
              {currentItems.length}
            </div>
          )}
        </div>
      </Button>
    </Link>
  )
})
