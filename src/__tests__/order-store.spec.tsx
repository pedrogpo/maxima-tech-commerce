import { OrderProductStore } from '~/store/product-list/order'

describe('OrderProductStore', () => {
  let store: OrderProductStore

  beforeEach(() => {
    store = new OrderProductStore()
  })

  test('should initialize with "name" as selectedType', () => {
    expect(store.selectedType).toBe('name')
  })

  test('should set selectedType to "price"', () => {
    store.setSelectedType('price')
    expect(store.selectedType).toBe('price')
  })

  test('should set selectedType to "category"', () => {
    store.setSelectedType('category')
    expect(store.selectedType).toBe('category')
  })

  test('should reset selectedType to null', () => {
    store.resetSelectedType()
    expect(store.selectedType).toBeNull()
  })

  test('should return "Nome" for translated type when selectedType is "name"', () => {
    store.setSelectedType('name')
    expect(store.getTranslatedType()).toBe('Nome')
  })

  test('should return "Preço" for translated type when selectedType is "price"', () => {
    store.setSelectedType('price')
    expect(store.getTranslatedType()).toBe('Preço')
  })

  test('should return "Categoria" for translated type when selectedType is "category"', () => {
    store.setSelectedType('category')
    expect(store.getTranslatedType()).toBe('Categoria')
  })

  test('should return null for translated type when selectedType is null', () => {
    store.resetSelectedType()
    expect(store.getTranslatedType()).toBeNull()
  })
})
