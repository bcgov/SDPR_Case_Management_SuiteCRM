Feature: Create Dashboard page Accessibility

Scenario:
  Given the user login
  and test aria-allowed-attr
  and test color-contrast
  and test frame-title
  and test landmark-one-main
  and test page-has-heading-one
  and test region
  Then print violations detected in terminal in a table with their impact and description