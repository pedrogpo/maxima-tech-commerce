'use client'
import { useRouter } from 'next/navigation'
import { BiLoaderAlt } from 'react-icons/bi'
import { Button } from '~/_components/ui/button'
import useCart from '~/hooks/useCart'
import { IProduct } from '~/interfaces/api/products'

interface IAddToCart {
  productData: IProduct
}

export function AddToCart({ productData }: IAddToCart) {
  const { addProductToCart, isAddLoading } = useCart()
  const { push } = useRouter()

  return (
    <Button
      disabled={isAddLoading}
      variant="default"
      size="lg"
      onClick={() => {
        addProductToCart(productData).then(() => push('/cart'))
      }}
      data-testid="add-to-cart-button"
    >
      <BiLoaderAlt
        className={`mr-3 animate-spin ${isAddLoading ? 'block' : 'hidden'}`}
      />
      Adicionar ao carrinho
    </Button>
  )
}
