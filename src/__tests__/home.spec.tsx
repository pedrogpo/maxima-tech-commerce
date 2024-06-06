import { render } from '@testing-library/react'
import { HttpError } from '~/core/http/errors'
import { IProductsResponse } from '~/interfaces/api/products'
import Products from '~/screens/home/_components/product-list/products'

jest.mock('~/actions/products', () => ({
  getProducts: jest.fn(),
}))

describe('Products component', () => {
  it('renders without crashing', async () => {
    const ERR_MESSAGE = 'Something went wrong'

    const { getProducts } = require('~/actions/products')

    getProducts.mockImplementation(() => {
      throw new Error(ERR_MESSAGE)
    })

    render(await Products())
  })

  it('render error message when getProducts throws an generic error', async () => {
    const ERR_MESSAGE = 'Something went wrong'

    const { getProducts } = require('~/actions/products')

    getProducts.mockImplementation(() => {
      throw new Error(ERR_MESSAGE)
    })

    const { findByText } = render(await Products())

    expect(
      await findByText(
        'Erro ao carregar produtos. Tente novamente mais tarde.',
      ),
    ).toBeInTheDocument()
  })

  it('render not found message when getProducts throws an not found error', async () => {
    const ERR_MESSAGE = 'Not found'

    const { getProducts } = require('~/actions/products')

    getProducts.mockImplementation(() => {
      throw new HttpError(ERR_MESSAGE, 404)
    })

    const { findByText } = render(await Products())

    expect(
      await findByText('Nenhum produto foi encontrado no momento.'),
    ).toBeInTheDocument()
  })

  it('render not found message when getProducts returns an empty list', async () => {
    const { getProducts } = require('~/actions/products')

    getProducts.mockImplementation(() => [])

    const { findByText } = render(await Products())

    expect(
      await findByText('Nenhum produto foi encontrado no momento.'),
    ).toBeInTheDocument()
  })

  it('render products list when getProducts returns a list of products', async () => {
    const products: IProductsResponse = [
      {
        id: '2',
        name: 'Chuteira',
        category: 'Tênis',
        price: 250,
        image:
          'https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/shoes/shoes-2.jpg',
        description:
          'Chuteira para futebol de campo, com travas de borracha e material resistente. Ideal para quem busca desempenho e conforto.',
      },
      {
        id: '3',
        name: 'Tênis 3',
        category: 'Tênis',
        price: 350,
        image:
          'https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/shoes/shoes-3.jpg',
        description:
          'Tênis 3 com design inovador e confortável. Ideal para quem busca estilo e conforto.',
      },
    ]

    const { getProducts } = require('~/actions/products')

    getProducts.mockImplementation(() => products)

    const { findByText } = render(await Products())

    products.forEach(async (product) => {
      expect(await findByText(product.name)).toBeInTheDocument()
    })
  })
})
