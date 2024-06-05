import { makeAutoObservable } from 'mobx'

type OrderTypes = 'name' | 'price' | 'category'

class OrderProductStore {
  selectedType: OrderTypes | null = null

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  setSelectedType(type: OrderTypes) {
    this.selectedType = type
  }

  resetSelectedType() {
    this.selectedType = null
  }
}

export const orderProductStore = new OrderProductStore()
