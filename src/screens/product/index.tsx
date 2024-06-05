import Image from 'next/image'
import { Container } from '~/_components/atoms'
import { Breadcrumb } from '~/_components/molecules'
import { formatMoney } from '~/core/utils/format'
import { IProduct } from '~/interfaces/api/products'
import { AddToCart } from './_components/addToCart'

interface IProductScreen {
  productData: IProduct
}

export default function ProductScreen({ productData }: IProductScreen) {
  const {
    price,
    image,
    promotional_price,
    discount_percentage,
    name,
    id,
    category,
    description,
  } = productData

  return (
    <Container>
      <div className="mb-16 mt-16 grid gap-6 lg:grid-cols-2">
        <Image
          src={image}
          width={800}
          height={800}
          alt={name}
          className="max-h-[800px] w-full rounded-lg object-cover"
        />
        <div>
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Produtos' },
              { label: name, href: `/product/${id}` },
            ]}
          />
          <div className="mt-12">
            <span className="text-2xl font-semibold text-gray-500">
              {category}
            </span>
            <h1 className="mt-2 text-5xl font-bold text-gray-900">{name}</h1>
            <p className="mt-4 max-w-[550px] text-2xl font-medium text-gray-700">
              {description}
            </p>
            <div className="mt-8">
              <p className="text-4xl font-black text-gray-900">
                {formatMoney(promotional_price || price)}
              </p>
              {promotional_price && discount_percentage && (
                <span className="text-2xl font-normal text-gray-800 line-through">
                  {formatMoney(price)}
                </span>
              )}
            </div>
            <div className="mt-8 flex items-center gap-4">
              <AddToCart productData={productData} />
              {discount_percentage && (
                <span className="text-lg font-semibold text-green-500">
                  {discount_percentage}% OFF
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
