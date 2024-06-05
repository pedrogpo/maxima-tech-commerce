import { IProduct } from '~/interfaces/api/products'

import {
  makePersistable,
  isHydrated,
  isPersisting,
  stopPersisting,
  clearPersistedStore,
} from 'mobx-persist-store'
import localForage from 'localforage'
import { enableStaticRendering } from 'mobx-react-lite'
import { makeAutoObservable } from 'mobx'
import { ICartItem } from '~/interfaces/cartItem'

const isServer = typeof window === 'undefined'
enableStaticRendering(isServer)

class CartStore {
  items: ICartItem[] = []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })

    if (!isServer)
      makePersistable(this, {
        name: 'lastConsults',
        properties: ['items'],
        storage: localForage,
      })
  }

  clearPersistedData() {
    localForage.clear()
    stopPersisting(this)
    return clearPersistedStore(this)
  }

  get isHydrated() {
    return isHydrated(this)
  }

  get isPersisting() {
    return isPersisting(this)
  }

  add(product: IProduct) {
    const existingProduct = this.items.find((p) => p.id === product.id)

    if (existingProduct) {
      existingProduct.quantity++
      return
    }

    this.items.push({ ...product, quantity: 1 })
  }

  remove(id: string) {
    this.items = this.items.filter((product) => product.id !== id)
  }

  clear() {
    this.items = []
  }

  get total() {
    return this.items.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    )
  }

  get totalWithDiscount() {
    return this.items.reduce(
      (acc, product) =>
        acc + (product.promotional_price || product.price) * product.quantity,
      0,
    )
  }

  changeQuantity(id: string, quantity: number) {
    const product = this.items.find((p) => p.id === id)

    if (!product) return

    product.quantity = quantity
  }
}

export const cartStore = new CartStore()
