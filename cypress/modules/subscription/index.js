class Subscription {
    scrollSubscription() { 
        cy.get('h2:contains("Subscription")').scrollIntoView()
    }

    cadastrarEmail(user) {
        cy.get('input[id="susbscribe_email"]').type(user)
        cy.get('#subscribe > .fa').click()

    }
}

export default new Subscription