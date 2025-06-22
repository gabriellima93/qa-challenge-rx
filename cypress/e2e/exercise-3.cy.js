import exercise3Page from '../pages/exercise3.page';

describe('Exercise 3: Verify Checkbox State', () => {
  beforeEach(() => {
    exercise3Page.navigateTo();
  });

  it('should verify that the correct checkbox is checked', () => {
    exercise3Page.verifyCheckboxIsChecked();
  });
}); 