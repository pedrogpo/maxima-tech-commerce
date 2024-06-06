import { CategoryStore } from '~/store/product-list/category'

describe('CategoryStore', () => {
  let store: CategoryStore

  beforeEach(() => {
    store = new CategoryStore()
  })

  test('should have a empty selectedCategory', () => {
    expect(store.selectedCategory).toBeNull()
  })

  test('should set selectedCategory', () => {
    const CATEGORY = 'Calças'
    store.setSelectedCategory(CATEGORY)
    expect(store.selectedCategory).toBe(CATEGORY)
  })

  test('should reset selectedCategory', () => {
    store.setSelectedCategory('Camisetas')
    store.resetSelectedCategory()
    expect(store.selectedCategory).toBeNull()
  })

  test('should have a empty selectedCategory', () => {
    expect(store.selectedCategory).toBeNull()
  })
})
