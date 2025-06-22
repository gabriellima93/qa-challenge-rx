class NavigationPage {
  getTab(tabName) {
    return cy.contains('[role="tab"]', tabName);
  }

  navigateTo(tabName) {
    cy.visit('/');
    this.getTab(tabName).click();
  }
}

export default new NavigationPage(); 