import navigationPage from './navigation.page';

class Exercise5Page {
  navigateTo() {
    navigationPage.navigateTo('Exercise 5 - Login Command');
  }

  login(email, password) {
    cy.login(email, password);
  }
}

export default new Exercise5Page(); 