import exercise4Page from '../pages/exercise4.page';

describe('Exercise 4: Element Relations', () => {
  beforeEach(() => {
    exercise4Page.navigateTo();
  });

  it('should verify the relationship between "old-car" and its sibling number', () => {
    exercise4Page.verifyOldCarAndSiblingNumber();
  });
}); 