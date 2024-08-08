Feature: Create new case

Scenario:
  Given user navigate to Create Case Screen
  and fill the inputs:
  - Case Subject
  - Communication Type
  - Communication Date
  - Issues
  - OASQ Mandate
  - Agencies Engaged
  - ASQ Action
  - Case City
  - Case Region
  - Case Note
  - Case Action Date
  When user click save
  Then New Case is created

Feature: Modify case

Background:
  Given user navigate to the View Case Screen
  and user choose an existing case

Scenario: Close a case
  Given user click 'edit' button
  and user update new case status to 'Closed'
  When user click save
  Then Case new status is 'Closed'

Scenario: Re-open a case
  Given user click 'edit' button
  and user update new case status to 'Open'
  When user click save
  Then Case new status is 'Open'

Scenario: Add more than one case issue
  Given user click 'edit' button
  and user choose an option from issue 2 dropdown
  and user choose an option from issue 3 dropdown
  and user choose an option from issue 4 dropdown
  When user click save
  Then new issues are added to case

Scenario: Add case issue as 'Other'
  Given user click 'edit' button
  and user type in a case issue as 'Other'
  When user click save
  Then Case is saved with an 'Other' issue

Scenario: Add attachment to case
  Given user click 'Attachments' panel
  and user click 'Link' button from the expanded 'Attachments' table
  and user choose a document from the modal
  and user click 'Link' button from the modal
  When user click save
  Then Case is saved with the selected attachmemt

Scenario: Link contact to case
  Given user click 'Contacts' panel
  and user click 'Link' button from the expanded 'Contacts' table
  and user choose a contact from the modal
  and user click 'Link' button from the modal
  When user click save
  Then Case is saved with the selected contact

Feature: Search case

Background:
  Given user navigate to the View Case Screen

Scenario: Search Contact
  Given user click filter button
  and user update new input for 'Subject' search field
  When user click search
  Then user can view the list of Case matching with the search result