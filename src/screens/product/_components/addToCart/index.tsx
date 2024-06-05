'use client'
import { BiLoaderAlt } from 'react-icons/bi'
import { Button } from '~/_components/ui/button'
import useCart from '~/hooks/useCart'
import { IProduct } from '~/interfaces/api/products'

interface IAddToCart {
  productData: IProduct
}

export function AddToCart({ productData }: IAddToCart) {
  const { add, isLoading } = useCart()

  return (
    <Button
      disabled={isLoading}
      variant="default"
      size="lg"
      onClick={() => {
        add(productData)
      }}
    >
      <BiLoaderAlt
        className={`mr-3 animate-spin ${isLoading ? 'block' : 'hidden'}`}
      />
      Adicionar ao carrinho
    </Button>
  )
}
