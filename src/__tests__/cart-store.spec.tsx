import { IProduct } from '~/interfaces/api/products'
import { CartStore } from '~/store/cart'

jest.mock('localforage', () => ({
  getItem: jest.fn().mockResolvedValue(null),
  setItem: jest.fn().mockResolvedValue(null),
  removeItem: jest.fn().mockResolvedValue(null),
  clear: jest.fn().mockResolvedValue(null),
}))

jest.mock('mobx-persist-store', () => ({
  stopPersisting: jest.fn().mockResolvedValue(null),
  clearPersistedStore: jest.fn().mockResolvedValue(null),
  isHydrated: jest.fn().mockResolvedValue(null),
  isPersisting: jest.fn().mockResolvedValue(null),
  makePersistable: jest.fn().mockResolvedValue(null),
}))

const product: IProduct = {
  id: '3',
  name: 'Tênis 3',
  category: 'Tênis',
  price: 100,
  discount_percentage: 20,
  promotional_price: 80,
  image:
    'https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/shoes/shoes-3.jpg',
  description:
    'Tênis 3 com design inovador e confortável. Ideal para quem busca estilo e conforto.',
}

describe('CartStore', () => {
  let store: CartStore

  beforeEach(() => {
    store = new CartStore()
  })

  test('should have a empty cart', () => {
    expect(store.items).toEqual([])
  })

  test('should add a product to the cart', () => {
    store.add(product)
    expect(store.items.length).toBe(1)
    expect(store.items[0].id).toBe(product.id)
    expect(store.items[0].quantity).toBe(1)
  })

  test('should increase quantity if product already exists', () => {
    store.add(product)
    store.add(product)
    expect(store.items.length).toBe(1)
    expect(store.items[0].quantity).toBe(2)
  })

  test('should remove a product from the cart', () => {
    store.add(product)
    store.remove(product.id)
    expect(store.items.length).toBe(0)
  })

  test('should clear the cart', () => {
    store.add(product)
    store.clear()
    expect(store.items.length).toBe(0)
  })

  test('should calculate total price correctly', () => {
    store.add(product)
    expect(store.total).toBe(100)
    store.add(product)
    expect(store.total).toBe(200)
  })

  test('should calculate total price with discount correctly', () => {
    store.add(product)
    expect(store.totalWithDiscount).toBe(80)
    store.add(product)
    expect(store.totalWithDiscount).toBe(160)
  })

  test('should change the quantity of a product', () => {
    store.add(product)
    store.changeQuantity(product.id, 5)
    expect(store.items[0].quantity).toBe(5)
  })
})
