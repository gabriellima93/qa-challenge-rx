# QA Challenge Solution

This repository contains the complete solution for the Rx Redefined QA Technical Challenge. The tests are built using Cypress and follow modern testing best practices, including the Page Object Model (POM) and the creation of custom commands.

---

## 🚀 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)

### 1. Installation

Clone the repository and install the project dependencies.

```bash
git clone https://github.com/gabriellima93/qa-challenge-rx
cd qa-challenge-rx
npm install
```

---

## 🧪 Running the Tests

This project uses Cypress for end-to-end testing. You can run the tests in two ways:

### 1. Interactive Mode (Recommended for Development)

To open the Cypress Test Runner and run tests in an interactive browser window, use the following command:

```bash
npx cypress open
```

This will allow you to see the tests execute in real-time and use the Cypress developer tools for debugging.

### 2. Headless Mode (for CI/CD or quick runs)

To run all tests headlessly in the terminal (as they would run in a CI/CD environment), use this command:

```bash
npx cypress run
```

---

## Test Case Structure

The test suite is organized by exercise, with each test file corresponding to a specific exercise in the application.

*   **`exercise-1.cy.js`:** Verifies that product details are displayed correctly on the page.
*   **`exercise-2.cy.js`:** Locates a specific table row by date and verifies the contents and interactive behavior of its elements.
*   **`exercise-3.cy.js`:** Finds a specific checkbox based on its relationship to other elements and verifies its state.
*   **`exercise-4.cy.js`:** Verifies the sibling and parent-child relationships between different elements on the page.
*   **`exercise-5.cy.js`:** Tests the custom `cy.login()` command and confirms a successful login.
*   **`exercise-6.cy.js`:** Ensures the correct product can be selected and added to the cart, even with ambiguous selectors.
*   **`exercise-7.cy.js`:** Validates the full request/response cycle of a `POST` request by using `cy.intercept()` to assert on the payload and the server's response.

---

## 🛠️ Key Architectural Decisions

*   **Page Object Model (POM):** All tests are structured using the Page Object Model to ensure a clean separation between test logic and page-specific implementation details. This makes the test suite highly maintainable and scalable.
*   **Centralized Navigation:** A `navigation.page.js` object handles all top-level tab navigation to keep the code DRY (Don't Repeat Yourself).
*   **Custom Commands:** A reusable `cy.login()` command was created to abstract away the complexity of the login flow.
*   **Backend Tasks (`cy.task`):** For Exercise 2, a Cypress task was used to run the `moment-timezone` library in Node.js, solving browser-compatibility issues and demonstrating a key Cypress feature for handling backend dependencies.
*   **Network Interception (`cy.intercept`):** Exercise 7 demonstrates full request/response cycle validation using Cypress's network interception capabilities.
*   **Resilient Selectors:** The test suite prioritizes user-facing, semantic selectors (e.g., ARIA roles) over brittle, implementation-specific CSS classes.
