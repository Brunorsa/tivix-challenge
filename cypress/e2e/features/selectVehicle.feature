Feature: Rent a car
  Scenario: Select a vehicle to rent
    Given I provide the form
    And the list of the cars are visible
    And choose a car to rent
    When I click in the ‘Rent’ button
    Then should show a modal with all the informations like company, price per day, location, license plate, and the pick-up and drop-off dates

