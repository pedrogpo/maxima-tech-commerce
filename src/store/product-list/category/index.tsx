import { makeAutoObservable } from 'mobx'
import { Categories } from '~/core/constants/categories'

export class CategoryStore {
  selectedCategory: Categories | null = null

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  setSelectedCategory(category: Categories) {
    this.selectedCategory = category
  }

  resetSelectedCategory() {
    this.selectedCategory = null
  }
}

export const categoryStore = new CategoryStore()
