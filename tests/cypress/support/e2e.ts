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

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Admin login before test files 
beforeEach(() => {
  cy.visit('https://advocase-d0d1b5-test.apps.gold.devops.gov.bc.ca/auth#')

  cy.wait(8000)
  cy.url().should('include', '/Login', { timeout: 10000 })

  cy.get('input[name="username"]').type('gabriel')
  cy.get('input[name="password"]').type('advocase')

  cy.get('button[id="login-button"]').click()

  cy.location('pathname').should('eq', '/')

  cy.wait(10000)

  cy.url().should('include', '/home')
})
