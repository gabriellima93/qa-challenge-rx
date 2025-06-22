import navigationPage from './navigation.page';

class Exercise6Page {
  navigateTo() {
    navigationPage.navigateTo('Exercise 6 - Product Selection');
  }

  getProductCard(productName) {
    return cy.contains('h2', productName).closest('.product-card');
  }

  clickAddToCartButton(productName) {
    this.getProductCard(productName).find('[data-cy="add-button"]').click();
  }

  getSuccessAlert() {
    return cy.get('[role="alert"]');
  }

  verifySuccessAlert(productName) {
    const expectedMessage = `Correct! You selected the ${productName}.`;
    this.getSuccessAlert()
      .should('be.visible')
      .and('contain.text', expectedMessage);
  }
}

export default new Exercise6Page(); 