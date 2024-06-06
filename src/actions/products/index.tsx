'use server'
import { fetchGet } from '~/core/http/api'
import { HttpError } from '~/core/http/errors'
import { IProduct, IProductsResponse } from '~/interfaces/api/products'

export const getProducts = async () => {
  const item = await fetchGet<IProductsResponse>(`/products`, {
    next: {
      revalidate: 30,
    },
  })

  // Exemplo p testar tratamento de erro na view
  // throw new HttpError('Not found', 404)

  return item
}

export const getProductById = async (id: string | number) => {
  const item = await fetchGet<IProduct>(`/products/${id}`, {
    next: {
      revalidate: 30,
    },
  })

  return item
}
