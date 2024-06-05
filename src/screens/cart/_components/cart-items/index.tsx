import { observer } from 'mobx-react-lite'
import { Breadcrumb } from '~/_components/molecules'
import { CartProductCard } from '~/_components/molecules/cards/cart-product'
import { formatMoney } from '~/core/utils/format'
import useCart from '~/hooks/useCart'

export const CartItems = observer(() => {
  const { totalWithDiscount, remove, currentItems, changeQuantity } = useCart()

  return (
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
  )
})
