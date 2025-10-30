class FormPage {
    get descriptionInput() {
        return cy.get('#description');
    }

    get amountInput() {
        return cy.get('#amount');
    }

    get dateInput() {
        return cy.get('#date');
    }

    get cancelButton() {
        return cy.get('.button.cancel');
    }

    get saveButton() {
        return cy.contains('Salvar');
    }

    submitForm() {
        this.saveButton.click();
    }
}

export default new FormPage();
