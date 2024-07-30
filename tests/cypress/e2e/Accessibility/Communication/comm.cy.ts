import 'cypress-axe'
import 'cypress-iframe'
import { terminalLog } from '../../utils'

describe('Communication Module Accessibility',{
  env: {
    route: '/#meetings'
  }
}, () => {
  it('Schedule new communication', () => {
    cy.visit(`/${Cypress.env('route')}/edit`)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('Communications list', () => {
    cy.visit(`/${Cypress.env('route')}/index`)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('Communication view', () => {
    cy.visit(`/${Cypress.env('route')}/index`)
    cy.wait(10000)
    cy.get('scrm-dynamic-field > a', { timeout: 10000 })
      .first()
      .click()
    cy.wait(10000)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('Communication edit', () => {
    cy.visit(`/${Cypress.env('route')}/index`)
    cy.wait(10000)
    cy.get('scrm-dynamic-field > a', { timeout: 10000 })
      .first()
      .click()
    cy.wait(10000)
    cy.frameLoaded('iframe')
    cy.wait(3000)
    cy.iframe().find('input[title="Edit"]').click()
    cy.wait(3000)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})
