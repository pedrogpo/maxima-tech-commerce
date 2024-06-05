import { IProduct } from './api/products'

export interface ICartItem extends IProduct {
  quantity: number
}
