import 'cypress-iframe'

describe('ASA 121 - Create Communication', {
  env: {
    route: '/#meetings'
  }
}, () => {
  describe('Schedule Communication', () => {
    beforeEach(() => {
      cy.visit(`/${Cypress.env('route')}/edit`)
      cy.wait(6000)
      cy.frameLoaded('iframe')
    })

    it('Should schedule a new communication, add details and save', () => {
      cy.iframe().find('input[id="name"]').type("ASA-121")
      cy.iframe().find('textarea[name="description"]').type("Communication schedule through test automation, with added details")
      cy.wait(6000)

      cy.frameLoaded('iframe')
      cy.wait(6000)
      cy.iframe().find('input[id="SAVE_HEADER"]').click({ force: true })
    })
  })

  describe('Update communication', () => {
    beforeEach(() => {
      cy.visit(`/${Cypress.env('route')}/index`)
      cy.wait(10000)
      cy.get('scrm-dynamic-field > a', { timeout: 10000 })
        .first()
        .click()
      cy.wait(5000)

      cy.frameLoaded('iframe')
    })

    it('Should find invitee', () => {
      cy.wait(10000)
      cy.iframe().find('input[title="Edit"]').click()
      cy.wait(3000)

      cy.frameLoaded('iframe')
      cy.wait(3000)

      cy.iframe().find('input[id="search_first_name"]').type("test")
      cy.iframe().find('input[id="invitees_search"]').click()
      cy.wait(3000)

      cy.iframe().find('input[id="CANCEL"]').click()
    })

    it('Should add invitee', () => {
      cy.wait(10000)
      cy.iframe().find('input[title="Edit"]').click()
      cy.wait(3000)

      cy.frameLoaded('iframe')
      cy.wait(3000)

      cy.iframe().find('input[id="search_first_name"]').type("test")
      cy.iframe().find('input[id="invitees_search"]').click()
      cy.wait(3000)

      cy.iframe().find('input[id="invitees_add_1"]').click()
      cy.iframe().find('input[id="invitees_add_2"]').click()
      cy.wait(3000)

      cy.iframe().find('input[id="SAVE_HEADER"]').click()
    })

    it('ASA 96 - Should update time and date', () => {
      cy.wait(10000)
      cy.iframe().find('input[title="Edit"]').click()
      cy.wait(3000)

      cy.frameLoaded('iframe')
      cy.wait(3000)

      cy.iframe().find('input[id="date_start_date"]').type("06/24/2025")
      cy.iframe().find('select[id="date_start_hours"]').select("03")
      cy.iframe().find('select[id="date_start_minutes"]').select("15")

      cy.iframe().find('input[id="date_end_date"]').type("06/24/2025")
      cy.iframe().find('select[id="date_end_hours"]').select("05")
      cy.iframe().find('select[id="date_end_minutes"]').select("00")

      cy.iframe().find('input[id="SAVE_HEADER"]').click()
    })

    it('ASA 97 - Should update type of communication', () => {
      cy.wait(3000)
      cy.iframe().find('input[title="Edit"]').click()
      cy.wait(3000)

      cy.frameLoaded('iframe')
      cy.wait(3000)

      cy.iframe().find('select[id="advocase_comm_type_c"]').select("Email")

      cy.iframe().find('input[id="SAVE_HEADER"]').click()
    })
  })
})
