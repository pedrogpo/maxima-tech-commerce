import { getProducts } from '~/actions/products'
import { ListProducts } from './list'

export default async function Products() {
  try {
    const productList = await getProducts()

    return <ListProducts cachedProductList={productList} />
  } catch {
    return (
      <div className="mt-16 grid grid-cols-4 gap-4">
        <h1>Erro ao carregar produtos</h1>
      </div>
    )
  }
}
