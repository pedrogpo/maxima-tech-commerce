'use server'
import { fetchGet } from '~/core/http/api'
import { IProduct, IProductsResponse } from '~/interfaces/api/products'

export const getProducts = async () => {
  const item = await fetchGet<IProductsResponse>(`/products`, {
    next: {
      revalidate: 30,
    },
  })

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
