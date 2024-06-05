'use client'
import Image from 'next/image'
import { BiTrashAlt } from 'react-icons/bi'
import { Select } from '~/_components/atoms/select'
import { Button } from '~/_components/ui/button'
import { formatMoney } from '~/core/utils/format'
import { IProduct } from '~/interfaces/api/products'

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
    <div className="relative flex rounded-lg bg-gray-100 shadow-xl">
      {promotional_price && discount_percentage && (
        <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-lg bg-black px-3 py-1.5 text-xs text-white">
          {discount_percentage}% OFF
        </div>
      )}
      <Image
        src={image}
        width={220}
        height={180}
        alt={name}
        className="rounded-l-lg object-cover"
      />
      <div className="flex flex-col justify-center gap-6 p-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <Button variant="destructive" size="sm" onClick={onRemove}>
              <BiTrashAlt size={20} />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-4">
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
          <div>
            <p className="text-base font-semibold text-gray-900">
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
