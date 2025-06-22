import navigationPage from './navigation.page';

class Exercise4Page {
  navigateTo() {
    navigationPage.navigateTo('Exercise 4 - Element Relations');
  }

  getOldCarDetailsContainer() {
    return cy.get('.my-class').find('.details');
  }

  verifyOldCarAndSiblingNumber() {
    this.getOldCarDetailsContainer()
      .find('span')
      .first()
      .should('have.text', 'old-car')
      .next()
      .should('have.text', '1');
  }
}

export default new Exercise4Page(); 