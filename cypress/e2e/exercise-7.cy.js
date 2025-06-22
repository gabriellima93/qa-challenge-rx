import exercise7Page from '../pages/exercise7.page';

describe('Exercise 7: API Interception', () => {
  beforeEach(() => {
    exercise7Page.navigateTo();
  });

  it('should intercept the API call and verify its request and response', () => {
    exercise7Page.interceptAndVerifyRequest();
    exercise7Page.triggerRequest();
    exercise7Page.waitForRequest();
  });
}); 