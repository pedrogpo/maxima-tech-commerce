describe('Cart without items', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.indexedDB.deleteDatabase('localforage')
    })

    cy.visit('http://localhost:3000/cart')
  })

  it('should show empty cart message', () => {
    cy.get('[data-testid=empty-cart-message]').should('exist')

    cy.get('[data-testid=empty-cart-message]').should(
      'have.text',
      'Adicione produtos ao carrinho para continuar',
    )
  })
})

describe('Cart with items', () => {
  const productMock = {
    id: '14',
    name: 'Calça Jeans Feminina',
    category: 'Calças',
    price: 130,
    image:
      'https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/pants/pant-4.jpg',
    description:
      'Calça jeans feminina com design inovador e confortável. Ideal para quem busca estilo e conforto.',
  }

  beforeEach(() => {
    cy.visit('http://localhost:3000/product/14')

    cy.get('[data-testid=add-to-cart-button]').click()

    cy.get('[data-testid=add-to-cart-button]').should('not.be.disabled')

    cy.visit('http://localhost:3000/cart')
  })

  it('should show cart items', () => {
    cy.get('[data-testid=cart-item]').should('exist')
  })

  it('should show product name', () => {
    cy.get('[data-testid=cart-item-name]').should('exist')

    cy.get('[data-testid=cart-item-name]').should('have.text', productMock.name)
  })

  it('should show product price', () => {
    cy.get('[data-testid=cart-item-price]').should('exist')

    cy.get('[data-testid=cart-item-price]').contains('R$ 130,00')
  })

  it('should remove product from cart', () => {
    cy.get('[data-testid=cart-item-remove-button]').click()

    cy.get('[data-testid=cart-item-confirm-remove-button]').click()

    cy.get('[data-testid=cart-item]').should('not.exist')
  })

  it('should show empty cart message', () => {
    cy.get('[data-testid=cart-item-remove-button]').click()

    cy.get('[data-testid=cart-item-confirm-remove-button]').click()

    cy.get('[data-testid=empty-cart-message]').should('exist')

    cy.get('[data-testid=empty-cart-message]').should(
      'have.text',
      'Adicione produtos ao carrinho para continuar',
    )
  })

  it('should show checkout button', () => {
    cy.get('[data-testid=checkout-button]').should('exist')

    cy.get('[data-testid=checkout-button]').should(
      'have.text',
      'Finalizar compra',
    )
  })
})
