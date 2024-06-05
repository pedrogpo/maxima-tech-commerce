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

  getTranslatedType() {
    if (!this.selectedType) return null

    if (this.selectedType === 'name') return 'Nome'
    if (this.selectedType === 'price') return 'Preço'
    if (this.selectedType === 'category') return 'Categoria'
  }
}

export const orderProductStore = new OrderProductStore()
