import { getProducts } from '~/actions/products'
import { ListProducts } from './list'
import { HttpError } from '~/core/http/errors'

export default async function Products() {
  try {
    const productList = await getProducts()

    if (productList.length === 0) throw new HttpError('Not found', 404)

    return <ListProducts cachedProductList={productList} />
  } catch (err) {
    // const { message } = err as Error | HttpError

    if (err instanceof HttpError && err.statusCode === 404) {
      return (
        <div className="mt-16 grid grid-cols-4 gap-4">
          <h1 className="text-xl">Nenhum produto foi encontrado no momento.</h1>
        </div>
      )
    }

    return (
      <div className="mt-16 grid grid-cols-4 gap-4">
        <h1>Erro ao carregar produtos. Tente novamente mais tarde.</h1>
      </div>
    )
  }
}
