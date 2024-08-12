Feature: Create new contact

Scenario:
  Given user navigate to Create Contact Screen
  and fill the inputs: First Name, Type of Contact, CLBL Eligibility
  When user click save
  Then New Contact is created

Feature: Search Contact and Access Contact History

Background:
  Given user navigate to the View Contact Screen

Scenario: Search Contact
  Given user click filter button
  and user update new input for 'First Name' search field
  When user click search
  Then user can view the list of Contact matching with the search result

Scenario: Access Contact History
  Given user choose an existing contact
  When user click 'Communication History' sub-panel
  Then user can view the History of the Contact

Feature: Update Contact

Background:
  Given user navigate to the View Contact Screen
  and user choose an existing contact
  and user click 'Edit' button

Scenario: Update Contact type
  Given user update new Contact type
  When user click save
  Then Contact is saved with new Contact type

Scenario: Update Secondary number
  Given user type a new Secondary number
  When user click save
  Then Contact is saved with new Secondary number