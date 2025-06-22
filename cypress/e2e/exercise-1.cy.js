import exercise1Page from '../pages/exercise1.page';

describe('Exercise 1: Find Product with Specific Price', () => {
  beforeEach(() => {
    exercise1Page.navigateTo();
  });

  it('should find a product with price $59', () => {
    exercise1Page.verifyProductPrice('$59');
  });
}); 