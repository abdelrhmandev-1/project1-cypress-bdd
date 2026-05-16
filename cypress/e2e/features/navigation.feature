Feature: Navigation

  Scenario: Navigate to sign in page
    Given I open the home page
    When I click sign in from navigation page
    Then sign in page should be displayed

  Scenario: Verify navigation buttons
    Given I open the home page
    Then navigation buttons should be visible