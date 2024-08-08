import 'cypress-axe'
import 'cypress-iframe'
import { terminalLog } from '../../utils'

describe('Report Module Accessibility',{
  env: {
    route: '/#reports'
  }
}, () => {
  it('Create Report', () => {
    cy.visit(`/${Cypress.env('route')}/edit`)
    cy.wait(6000)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('View Reports', () => {
    cy.visit(`/${Cypress.env('route')}/index`)
    cy.wait(6000)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('View Report Detail', () => {
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
