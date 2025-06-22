import exercise6Page from '../pages/exercise6.page';

describe('Exercise 6: Product Selection', () => {
  beforeEach(() => {
    exercise6Page.navigateTo();
  });

  it('should add the correct product to the cart', () => {
    const productName = 'Gaming Headset';
    exercise6Page.clickAddToCartButton(productName);
    exercise6Page.verifySuccessAlert(productName);
  });
}); 