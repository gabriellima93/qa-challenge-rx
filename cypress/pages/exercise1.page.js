import navigationPage from './navigation.page';

class Exercise1Page {
  navigateTo() {
    navigationPage.navigateTo('Exercise 1 - Find Product');
  }

  getProductByPrice(price) {
    return cy.contains('[data-cy="product-item"]', price);
  }

  verifyProductPrice(price) {
    this.getProductByPrice(price)
      .should('be.visible');
  }
}

export default new Exercise1Page(); 