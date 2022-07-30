Feature: Rent a car
  Scenario: Fill the form and show the list of cars
    Given the form is visible
    And I insert the pick-up and drop-off dates
    When I click in the ‘Search’ button
    Then It should appears a list of cars for me
