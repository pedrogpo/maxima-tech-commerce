import { getProductById } from '~/actions/products'
import ProductScreen from '~/screens/product'

interface IProductProps {
  productId: string
}

export default async function Page({
  params: { productId },
}: {
  params: IProductProps
}) {
  try {
    const productData = await getProductById(productId)

    return <ProductScreen productData={productData} />
  } catch (error) {
    console.error(error)
  }
}
