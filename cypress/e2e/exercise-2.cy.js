import exercise2Page from '../pages/exercise2.page';

describe('Exercise 2: Find Table Elements', () => {
  beforeEach(() => {
    exercise2Page.navigateTo();
  });

  it('should find and interact with elements in the correct table row', () => {
    exercise2Page.selectTableRowByDate('05/15/2024');

    exercise2Page.verifyRowElements();
    exercise2Page.clickOrderMoreButton();
    exercise2Page.assertOrderMoreButtonHasFocus();
  });
}); 