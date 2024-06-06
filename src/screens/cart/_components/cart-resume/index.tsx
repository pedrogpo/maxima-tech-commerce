import { observer } from 'mobx-react-lite'
import { Button } from '~/_components/ui/button'
import { formatMoney } from '~/core/utils/format'
import useCart from '~/hooks/useCart'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/_components/ui/alert-dialog'
import Toast from '~/core/toast'

export const CartResume = observer(() => {
  const { totalWithDiscount, clearCart, currentItems } = useCart()

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
              Toast({
                type: 'success',
                message: `Compra finalizada com sucesso ${JSON.stringify(currentItems.map((item) => `${item.id} - ${item.name} (${item.quantity}x)`))}`,
              })
            }}
          >
            Finalizar compra
          </Button>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-gray-400 bg-gray-100 py-6 hover:border-gray-600"
              >
                Limpar carrinho
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Você deseja limpar o carrinho?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    clearCart()
                  }}
                >
                  Continuar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
})
