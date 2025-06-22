import navigationPage from './navigation.page';

class Exercise7Page {
  navigateTo() {
    navigationPage.navigateTo('Exercise 7 - API Intercept');
  }

  interceptAndVerifyRequest() {
    cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts', (req) => {
      expect(req.body).to.have.property('title').that.is.a('string');
      expect(req.body).to.have.property('body').that.is.a('string');
      expect(req.body).to.have.property('userId').that.is.a('number');

      req.reply((res) => {
        expect(res.statusCode).to.eq(201);
        expect(res.body).to.have.property('id').that.is.a('number');
      });
    }).as('postRequest');
  }

  triggerRequest() {
    cy.window().then(win => {
      win.fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Product Added',
          body: 'Added product to cart',
          userId: 1,
        }),
      });
    });
  }

  waitForRequest() {
    cy.wait('@postRequest');
  }
}

export default new Exercise7Page(); 