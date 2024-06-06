import { Metadata } from 'next'
import { getProductById } from '~/actions/products'
import ErrorScreen from '~/screens/errors'
import ProductScreen from '~/screens/product'

interface IProductProps {
  productId: string
}

export async function generateMetadata({
  params: { productId },
}: {
  params: IProductProps
}): Promise<Metadata> {
  try {
    const productData = await getProductById(productId)

    return {
      title: productData.name,
    }
  } catch (err) {
    return {
      title: 'Página de produto',
    }
  }
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
    return (
      <ErrorScreen
        title="Produto não encontrado"
        message={'O produto que você está tentando acessar não foi encontrado.'}
      />
    )
  }
}
