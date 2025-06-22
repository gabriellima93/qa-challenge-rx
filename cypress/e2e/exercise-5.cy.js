import exercise5Page from '../pages/exercise5.page';

describe('Exercise 5: Login Command', () => {
  beforeEach(() => {
    exercise5Page.navigateTo();
  });

  it('should successfully log in a user', () => {
    exercise5Page.login('test@example.com', 'password123');
  });
}); 