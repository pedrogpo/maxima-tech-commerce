import { observer } from 'mobx-react-lite'
import { Button } from '~/_components/ui/button'
import { formatMoney } from '~/core/utils/format'
import useCart from '~/hooks/useCart'

export const CartResume = observer(() => {
  const { totalWithDiscount, clear, currentItems } = useCart()

  return (
    <div className="flex lg:justify-end">
      <div className="max-lg:w-full">
        <h3 className="text-2xl font-semibold uppercase text-gray-700">
          Resumo
        </h3>
        <div className="mt-8 flex w-full items-center justify-between gap-12">
          <span className="text-xl font-semibold text-gray-600">
            Subtotal de produtos
          </span>
          <span className="text-xl font-semibold text-gray-800">
            {formatMoney(totalWithDiscount)}
          </span>
        </div>
        <div className="mt-4 flex w-full items-center justify-between gap-12">
          <span className="text-xl font-semibold text-gray-600">Entrega</span>
          <span className="text-xl font-semibold text-gray-800">R$ 40,00</span>
        </div>
        <div className="mt-6 h-[1px] w-full bg-gray-500"></div>
        <div className="mt-4 flex w-full items-center justify-between gap-12">
          <span className="text-xl font-semibold text-gray-600">Total</span>
          <span className="text-xl font-semibold text-gray-800">
            {formatMoney(totalWithDiscount + 40)}
          </span>
        </div>
        <div className="mt-8 flex flex-col gap-5">
          <Button
            variant="default"
            size="lg"
            className="w-full py-6"
            onClick={() => {
              console.log(JSON.stringify(currentItems))
            }}
          >
            Finalizar compra
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-gray-400 bg-gray-100 py-6 hover:border-gray-600"
            onClick={clear}
          >
            Limpar carrinho
          </Button>
        </div>
      </div>
    </div>
  )
})
