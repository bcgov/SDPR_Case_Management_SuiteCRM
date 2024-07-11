import 'cypress-iframe'
import 'cypress-axe'
import { terminalLog } from '../utils'

describe('ASA 68 - Assign Roles', {
  env: {
    route: '/#acl-roles'
  }
}, () => {
  describe('ASA 119 - Create role', () => {
    beforeEach(() => {
      cy.visit(`/${Cypress.env('route')}/edit`)
      cy.wait(8000)
      cy.frameLoaded('iframe')
    })

    it('Should create a new role', () => {
      cy.iframe().find('input[id="name"]').type("ASA-119")
      cy.iframe().find('textarea[name="description"]').type("Role creation through test automation")
      cy.wait(6000)

      cy.frameLoaded('iframe')
      cy.iframe().find('input[title="Save"]').click()

      cy.checkA11y(null, null, terminalLog)
    })
  })

  describe('ASA 120 - Update role', () => {
    beforeEach(() => {
      cy.visit(`/${Cypress.env('route')}/index`)
      cy.injectAxe()
      cy.checkA11y(null, null, terminalLog)
      cy.wait(10000)
      cy.get('scrm-dynamic-field > a', { timeout: 10000 })
        .first()
        .click()
      cy.checkA11y(null, null, terminalLog)
      cy.wait(5000)

      cy.frameLoaded('iframe')
    })

    it('Should update role name', () => {
      cy.wait(3000)
      cy.iframe().find('input[title="Edit"]').click()
      cy.wait(3000)
      cy.frameLoaded('iframe')
      cy.iframe().find('input[id="name"]').type("ASA-120")
      cy.iframe().find('input[id="save_button"]').click()

      cy.checkA11y(null, null, terminalLog)
    })

    it('Should update role description', () => {
      cy.wait(3000)
      cy.iframe().find('input[title="Edit"]').click()
      cy.wait(3000)
      cy.frameLoaded('iframe')
      cy.iframe().find('textarea[name="description"]').type("ASA-120")
      cy.iframe().find('input[id="save_button"]').click()
      cy.iframe().find('input[title="Save"]').click()

      cy.checkA11y(null, null, terminalLog)
    })

    it('Should update role permissions', () => {
      cy.wait(10000)
      cy.iframe().find('div[id="viewlink"]').click()
      cy.iframe().find('select[id="act_guidview"]').select('All')

      cy.checkA11y(null, null, terminalLog)
    })
  })
})
