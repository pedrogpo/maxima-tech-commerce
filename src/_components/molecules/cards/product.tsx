import Image from 'next/image'
import { Button } from '~/_components/ui/button'
import { formatMoney } from '~/core/utils/format'
import { IProduct } from '~/interfaces/api/products'

export function ProductCard({
  category,
  image,
  name,
  price,
  discount_percentage,
  promotional_price,
}: IProduct) {
  return (
    <div className="relative flex flex-col rounded-lg bg-gray-100 shadow-xl">
      {promotional_price && discount_percentage && (
        <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-lg bg-black px-3 py-1.5 text-xs text-white">
          {discount_percentage}% OFF
        </div>
      )}
      <Image
        src={image}
        width={440}
        height={360}
        alt={name}
        className="h-[360px] w-full rounded-t-lg object-cover"
      />
      <div className="flex flex-col justify-center gap-6 p-6">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-base font-medium text-gray-800">{category}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl font-black text-gray-900">
              {formatMoney(promotional_price || price)}
            </p>
            {promotional_price && discount_percentage && (
              <span className="text-base font-normal text-gray-800 line-through">
                {formatMoney(price)}
              </span>
            )}
          </div>
        </div>
        <Button className="py-5" variant="default">
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  )
}
