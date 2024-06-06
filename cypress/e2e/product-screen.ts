describe('Product screen', () => {
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
  })

  it('should show product name', () => {
    cy.get('[data-testid=product-name]').should('exist')
    cy.get('[data-testid=product-name]').should('have.text', productMock.name)
  })

  it('should show product category', () => {
    cy.get('[data-testid=product-category]').should('exist')
    cy.get('[data-testid=product-category]').should(
      'have.text',
      productMock.category,
    )
  })

  it('should show product price', () => {
    cy.get('[data-testid=product-price]').should('exist')
    cy.get('[data-testid=product-price]').contains('R$ 130,00')
  })

  it('should show product description', () => {
    cy.get('[data-testid=product-description]').should('exist')
    cy.get('[data-testid=product-description]').should(
      'have.text',
      productMock.description,
    )
  })

  it('should show add to cart button', () => {
    cy.get('[data-testid=add-to-cart-button]').should('exist')
    cy.get('[data-testid=add-to-cart-button]').should('not.be.disabled')
  })
})
