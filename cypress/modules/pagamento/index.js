class Pagamento {
  detalhesPagamento(payment) {
    cy.get('[data-qa="name-on-card"]').type(payment.name);
    cy.get('[data-qa="card-number"]').type(payment.number);
    cy.get('[data-qa="cvc"]').type(payment.cvc);
    cy.get('[data-qa="expiry-month"]').type(payment.expMonth);
    cy.get('[data-qa="expiry-year"]').type(payment.expYear);
  }

  pagamentoConfirmado() {
    cy.contains('Pay and Confirm Order').click();
  }

  verificarMensagemSucesso() {
    cy.get('[data-qa="order-placed"]').should('be.visible')
    cy.contains('Order Placed!').should('be.visible')
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
  }
}

export default new Pagamento();