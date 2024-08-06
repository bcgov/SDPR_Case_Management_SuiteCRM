import 'cypress-axe'
import 'cypress-iframe'
import { terminalLog } from '../../utils'

describe('Contact Module Accessibility',{
  env: {
    route: '/#contacts'
  }
}, () => {
  it('Create Contact', () => {
    cy.visit(`/${Cypress.env('route')}/edit`)
    cy.wait(6000)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('View Contact', () => {
    cy.visit(`/${Cypress.env('route')}/index`)
    cy.wait(6000)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('View Contact Detail', () => {
    cy.visit(`/${Cypress.env('route')}/index`)
    cy.wait(10000)

    cy.get('.table-body-row', { timeout: 10000 })
      .first()
      .click()
    cy.wait(6000)

    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})
