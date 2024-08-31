<h1>BC GOV SuiteCRM Custom Theme</h1>

Table of Contents
- [Introduction](#introduction)
- [Adding customizations to SuiteCRM](#adding-customizations-to-suitecrm)
- [Update SuiteCRM to use BC Gov theme](#update-suitecrm-to-use-bc-gov-theme)

# Introduction

This is a custom theme for SuiteCRM that is based on the [BC Gov Design System](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/design-system/about-the-design-system/#component-library)

# Adding customizations to SuiteCRM

Unzip the `./bcgov-theme/bcgov-theme.zip` file and follow the instructions from the [BC Gov SuiteCRM Docker image `Theming customizations` section](../docker/suitecrm-image/README.md#theming-customizations) for information on where to place the theme files and build a custom image.

# Update SuiteCRM to use BC Gov theme

1. Login as an admin
2. Navigate to the admin panel
3. Under System, click ‘Theme’ link
  3.1. Enabled the ‘BC Government’ theme
  3.2. Set the ‘BC Government’ theme to default theme
  3.3. Save
4. Navigate to the `edit profile`
  4.1. Click the themes tab
  4.2. Select the ‘BC Government’ option
  4.3. Click the layout options
  4.4. Under Styles, select the BC Gov option
    4.4.1. If you do not see the BC Gov option, save and reenter the `edit profile`
    4.4.2. The system might be very off, but you can find the style option at the bottom of the page, along with the save button.
