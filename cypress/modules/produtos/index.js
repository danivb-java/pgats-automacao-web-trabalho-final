class Produtos {
    visualisarPrimeiroProduto() {
        cy.get('a[href*="/product_details"]').first().click()
    }

    pesquisarProduto(productName) {
        cy.get('input[id="search_product"]').type(productName)
        cy.get('button[id="submit_search"]').click()
    }

    adicionarProduto() {
        cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
        cy.contains('Add to cart').click();
        cy.contains('Continue Shopping').click();       
    }

    irParaCarrinho() {
        cy.contains('Cart').click();
  }
}

export default new Produtos()