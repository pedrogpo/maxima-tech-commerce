import { useState, useEffect } from 'react'
import Toast from '~/core/toast'
import { IProduct } from '~/interfaces/api/products'
import { cartStore } from '~/store/cart'

const addToCartService = async (product: IProduct) => {
  // simulando uma call de api
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })
}

const useCart = () => {
  const [currentItems, setCurrentItems] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const loadItems = async () => {
      setCurrentItems(cartStore.items)
    }

    loadItems()
  }, [cartStore.items])

  const add = async (product: IProduct) => {
    setIsLoading(true)
    try {
      // Call the service function to add item to cart
      await addToCartService(product)
      // Add the item to the cart store
      cartStore.add(product)

      Toast({
        message: `${product.name} adicionado ao carrinho`,
        type: 'success',
      })
    } catch (error) {
      Toast({
        message: 'Erro ao adicionar produto ao carrinho',
        type: 'error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const remove = (id: string) => {
    cartStore.remove(id)
    Toast({
      message: 'Produto removido do carrinho',
      type: 'success',
    })
  }

  const clear = () => {
    cartStore.clear()
    Toast({
      message: 'Carrinho limpo',
      type: 'success',
    })
  }

  const total = cartStore.total
  const totalWithDiscount = cartStore.totalWithDiscount

  return {
    add,
    remove,
    clear,
    total,
    totalWithDiscount,
    isLoading,
    currentItems,
  }
}

export default useCart
