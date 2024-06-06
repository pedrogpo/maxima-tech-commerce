'use client'
import Image from 'next/image'
import { BiTrashAlt } from 'react-icons/bi'
import { Select } from '~/_components/atoms/select'
import { Button } from '~/_components/ui/button'
import { formatMoney } from '~/core/utils/format'
import { IProduct } from '~/interfaces/api/products'

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

interface ICartProductCard extends IProduct {
  defaultQuantity?: number
  onChangeQuantity?: (quantity: number) => void
  onRemove?: () => void
}

export function CartProductCard({
  description,
  image,
  name,
  price,
  discount_percentage,
  promotional_price,
  defaultQuantity,
  onChangeQuantity,
  onRemove,
}: ICartProductCard) {
  return (
    <div
      data-testid="cart-item"
      className="relative flex rounded-lg bg-gray-100 shadow-xl max-md:flex-col"
    >
      {promotional_price && discount_percentage && (
        <div className="absolute left-2 top-2 rounded-lg bg-black px-3 py-1.5 text-xs text-white">
          {discount_percentage}% OFF
        </div>
      )}
      <Image
        src={image}
        width={800}
        height={800}
        alt={name}
        className="min-w-[200px] rounded-l-lg bg-center object-cover max-md:w-full"
        data-testid="cart-item-image"
      />
      <div className="relative flex w-full flex-col gap-6 p-6 pb-[120px]">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h3
              className="text-xl font-bold text-gray-900"
              data-testid="cart-item-name"
            >
              {name}
            </h3>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button
                  data-testid="cart-item-remove-button"
                  variant="destructive"
                  size="sm"
                >
                  <BiTrashAlt size={20} />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Você deseja remover este produto do carrinho?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction
                    data-testid="cart-item-confirm-remove-button"
                    onClick={onRemove}
                  >
                    Continuar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <div className="absolute bottom-4 left-6 flex w-[calc(100%-3rem)] flex-col flex-wrap justify-between gap-4">
          <div>
            <Select
              placeholder="Quantidade"
              items={Array.from({ length: 5 }, (_, i) => ({
                label: String(i + 1),
                value: String(i + 1),
              }))}
              defaultValue={String(defaultQuantity)}
              onChange={(value) => onChangeQuantity?.(Number(value))}
            />
          </div>
          <div className="flex items-center gap-4">
            <p
              data-testid="cart-item-price"
              className="text-base font-semibold text-gray-900"
            >
              {formatMoney(promotional_price || price)}
            </p>
            {promotional_price && discount_percentage && (
              <span className="text-sm font-normal text-gray-800 line-through">
                {formatMoney(price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
