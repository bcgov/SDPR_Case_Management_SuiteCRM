Feature: Create new communication

Scenario:
  Given user navigate to Communication Schedule Screen
  and fill the inputs: Subject, Description
  When user click save
  Then New Communication is created

Feature: Update existing Communication

Background:
  Given user navigate to the View Communication Screen
  and choose an existing communication

Scenario: Search Invitee
  Given user click edit button
  and user update new input for Invitee Name field
  When user click search
  Then user can view the list of Invitees matching with the search result

Scenario: Add Invitee
  Given user view the list of Invitees matching with the search result
  and user click add
  When user click save
  Then the invitees added to the communication

Scenario: Update Time and Date
  Given user click edit button
  and user choose a new start date and time
  and user choose a new end date and time
  When user click save
  Then Communication is saved with new time and date

Scenario: Update Type of Communication
  Given user click edit button
  and user choose a new type of Communication
  When user click save
  Then Communication is saved with new type of Communication