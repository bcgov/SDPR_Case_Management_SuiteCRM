// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-axe'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Admin login before test files 
beforeEach(() => {
  cy.visit('/auth')
  cy.injectAxe()
  cy.wait(4000)

  cy.get('input[name="username"]').type(Cypress.env('CYPRESS_SCRM_USERNAME'))
  cy.get('input[name="password"]').type(Cypress.env('CYPRESS_SCRM_PASSWORD'))
  cy.get('button[id="login-button"]').click()
  // cy.get('input[type="submit"]').click()

  cy.location('pathname').should('eq', '/')
  cy.wait(8000)

  cy.url().should('include', '/home')
})
