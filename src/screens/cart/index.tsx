'use client'

import { observer } from 'mobx-react-lite'
import { Container } from '~/_components/atoms'
import useCart from '~/hooks/useCart'
import { LoadingCard } from './_components/loading-cart'
import { EmptyCart } from './_components/empty-cart'
import { CartItems } from './_components/cart-items'
import { CartResume } from './_components/cart-resume'

function CartScreen() {
  const { currentItems, isCartLoading } = useCart()

  if (isCartLoading) {
    return <LoadingCard />
  }

  if (!currentItems.length) {
    return <EmptyCart />
  }

  return (
    <div className="mt-16 min-h-[calc(100vh-125px-4rem)] max-lg:mb-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <CartItems />
          <CartResume />
        </div>
      </Container>
    </div>
  )
}

export default observer(CartScreen)
