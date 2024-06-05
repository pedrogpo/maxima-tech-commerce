'use client'

import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { BiLoaderAlt } from 'react-icons/bi'
import { Container } from '~/_components/atoms'
import { Breadcrumb } from '~/_components/molecules'
import { CartProductCard } from '~/_components/molecules/cards/cartProduct'
import { Button } from '~/_components/ui/button'
import { formatMoney } from '~/core/utils/format'
import useCart from '~/hooks/useCart'
import { LoadingCard } from './_components/loading-cart'
import { EmptyCart } from './_components/empty-cart'

function CartScreen() {
  const {
    totalWithDiscount,
    remove,
    currentItems,
    changeQuantity,
    isCartLoading,
  } = useCart()

  if (isCartLoading) {
    return <LoadingCard />
  }

  if (!currentItems.length) {
    return <EmptyCart />
  }

  return (
    <div className="mb-16 mt-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Breadcrumb
              items={[{ label: 'Inicio', href: '/' }, { label: 'Carrinho' }]}
            />

            <div className="mt-8">
              <h1 className="text-4xl font-bold text-gray-900">Carrinho</h1>
              <p className="text-lg font-medium text-gray-700">
                Subtotal (4 Produtos): {formatMoney(totalWithDiscount)}
              </p>
              {currentItems.map((item) => (
                <div key={item.id} className="mt-8">
                  <CartProductCard
                    {...item}
                    defaultQuantity={item.quantity}
                    onChangeQuantity={(quantity) => {
                      changeQuantity(item.id, quantity)
                    }}
                    onRemove={() => remove(item.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default observer(CartScreen)
