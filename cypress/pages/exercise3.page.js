import navigationPage from './navigation.page';

class Exercise3Page {
  navigateTo() {
    navigationPage.navigateTo('Exercise 3 - Checkbox Verification');
  }

  getCheckbox() {
    return cy.get('[data-cy="test-grid-3"]')
      .find('.item-content')
      .contains('p', 'Test2')
      .siblings('input[type="checkbox"]');
  }

  verifyCheckboxIsChecked() {
    this.getCheckbox().should('be.checked');
  }
}

export default new Exercise3Page(); 