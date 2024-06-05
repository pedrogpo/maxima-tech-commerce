import { useState, useEffect } from 'react'
import Toast from '~/core/toast'
import { cartStore } from '~/store/cart'
import useClientSideStore from './useClientSideStore'
import { IProduct } from '~/interfaces/api/products'

const addToCartService = async (product: IProduct) => {
  // Aqui seria uma call de API, por exemplo
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })
}

const useCart = () => {
  const clientCartStore = useClientSideStore(cartStore)
  const currentItems = clientCartStore?.items || []
  const [isAddLoading, setIsAddLoading] = useState<boolean>(false)
  const [isCartLoading, setIsCartLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsCartLoading(false)
  }, [])

  const add = async (product: IProduct) => {
    setIsAddLoading(true)
    try {
      await addToCartService(product)

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
      setIsAddLoading(false)
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

  const changeQuantity = (id: string, quantity: number) => {
    cartStore.changeQuantity(id, quantity)

    Toast({
      message: 'Quantidade alterada com sucesso',
      type: 'success',
    })
  }

  const total = clientCartStore?.total || 0
  const totalWithDiscount = clientCartStore?.totalWithDiscount || 0

  return {
    add,
    remove,
    clear,
    total,
    totalWithDiscount,
    isAddLoading,
    currentItems,
    changeQuantity,
    isCartLoading,
  }
}

export default useCart
