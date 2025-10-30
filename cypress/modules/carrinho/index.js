class Carrinho {
  verificarCartaoPagamento() {
    cy.contains('Shopping Cart').should('be.visible');
  }

  prosseguirCheckout() {
    cy.contains('Proceed To Checkout').click();
  }
}

export default new Carrinho();