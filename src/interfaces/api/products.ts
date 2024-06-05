export type IProductsResponse = IProduct[]

export interface IProduct {
  id: string
  name: string
  category: string
  price: number
  discount_percentage?: number
  promotional_price?: number
  image: string
  description: string
}
