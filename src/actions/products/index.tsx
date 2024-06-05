'use server'
import { fetchGet } from '~/core/http/api'
import { IProductsResponse } from '~/interfaces/api/products'

export const getProducts = async () => {
  const item = await fetchGet<IProductsResponse>(`/products`, {
    next: {
      revalidate: 30,
    },
  })

  return item
}
