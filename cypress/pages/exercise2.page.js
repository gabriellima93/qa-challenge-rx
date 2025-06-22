import navigationPage from './navigation.page';

class Exercise2Page {
  navigateTo() {
    navigationPage.navigateTo('Exercise 2 - Table Elements');
  }

  // This method calls the 'getFormattedDate' task that I defined in cypress.config.js.
  // It wasn't possible to use 'moment-timezone' directly in this file because it's a
  // Node.js library. The task allows me to correctly format the date for the
  // 'America/Los_Angeles' timezone before using it in the test.
  selectTableRowByDate(dateString) {
    cy.task('getFormattedDate', dateString).then(formattedDate => {
      cy.get('table[name="Test1"]')
        .contains('td', formattedDate)
        .parent('tr')
        .as('test-table');
    });
  }

  findFirstParagraph() {
    return cy.get('@test-table').contains('p', /^First$/);
  }

  findAcceptedSpan() {
    return cy.get('@test-table').contains('span', 'Accepted');
  }

  findViewButton() {
    return cy.get('@test-table').contains('button', 'View');
  }

  verifyRowElements() {
    this.findFirstParagraph().should('be.visible');
    this.findAcceptedSpan().should('be.visible');
    this.findViewButton().should('be.visible');
  }

  getOrderMoreButton() {
    return cy.get('@test-table').find('button.button-order-more');
  }

  clickOrderMoreButton() {
    this.getOrderMoreButton().click();
  }

  assertOrderMoreButtonHasFocus() {
    this.getOrderMoreButton().should('have.focus');
  }
}

export default new Exercise2Page(); 