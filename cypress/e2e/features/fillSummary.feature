Feature: Rent a car
  Scenario: Fill the summary form
    Given I’m in the detail’s screen
    And I click the first ‘Rent!’ button
    And show me the summary form to fill
    And fill all the inputs like, name, last name, card number and email
    When I click in the second ‘Rent’ button
    Then should show a success screen

