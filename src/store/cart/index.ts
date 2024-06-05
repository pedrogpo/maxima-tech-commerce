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

const isServer = typeof window === 'undefined'
enableStaticRendering(isServer)

class CartStore {
  items: IProduct[] = []

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
    this.items.push(product)
  }

  remove(id: string) {
    this.items = this.items.filter((product) => product.id !== id)
  }

  clear() {
    this.items = []
  }

  get total() {
    return this.items.reduce((acc, product) => acc + product.price, 0)
  }

  get totalWithDiscount() {
    return this.items.reduce(
      (acc, product) => acc + (product.promotional_price || product.price),
      0,
    )
  }
}

export const cartStore = new CartStore()
