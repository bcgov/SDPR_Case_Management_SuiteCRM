import 'cypress-axe'
import { terminalLog } from '../../utils'

describe('Access Role Accessibility',{
  env: {
    route: '/#acl-roles'
  }
}, () => {
  it('List access roles', () => {
    cy.visit(`/${Cypress.env('route')}/index`)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('Create new access role', () => {
    cy.visit(`/${Cypress.env('route')}/edit`)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('List access roles by user', () => {
    cy.visit(`/${Cypress.env('route')}/ListUsers`)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('Edit access role', () => {
    cy.visit(`/${Cypress.env('route')}/record`)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})
