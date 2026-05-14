Feature: Navigation

  Scenario: 10 Navigate to sign in page
    Given I open the home page
    When I click sign in
    Then sign in page should open

  Scenario: 11 Navigate to cart page
    Given I open the home page
    When I open the cart page
    Then cart page should open

  Scenario: 12 Verify navigation buttons are visible
    Given I open the home page
    Then cart button should be visible
    And sign in button should be visible