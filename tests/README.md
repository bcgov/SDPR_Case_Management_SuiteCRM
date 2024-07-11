# Cypress E2E Test Suite

This project contains end-to-end (E2E) tests for our application using Cypress.
Cypress is a powerful, fast, and easy-to-use testing framework for web applications.

## Table of Contents

- [Installation](#installation)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)

## Installation

To set up Cypress and install the necessary dependencies, follow these steps:

1. Make sure the terminal is located in the correct directory

2. Ensure you have Node.js v22.1.0 installed (https://nodejs.org/).

3. Install dependencies:

```bash
    npm install
```

## Writing Tests

To write a new test, create a file in the `cypress/e22` directory with a `.cy.ts` and feature extensions. Here's an example test:

```javascript
  describe('User story to be tested', () => {
    describe('Feature to be tested', () => {
      it('Scenario to be tested', () => {
        cy.visit('https://example.com');
        cy.title().should('include', 'Example Domain');
      });
    })
  });
```

```feature
  Feature: User story

  Scenario:
    Given user do one action
    and do a second action
    When user do a final action
    Then the expected result should happen
```


##  Running Tests
You can run Cypress tests in two modes: interactive mode and headless mode.

### Interactive Mode
To open Cypress in interactive mode, run:

```bash
  npx cypress open
```
This will open the Cypress Test Runner, allowing you to run tests interactively.

Headless Mode
To run tests in headless mode, run:

```bash
  npx cypress run
```
This will execute all tests and provide output in the terminal.
