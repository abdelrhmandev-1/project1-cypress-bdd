Feature: Filter

  Scenario: 13 Filter by category
    Given I open the home page
    When I select category from fixture
    Then filtered products should be visible

  Scenario: 14 Category section is visible
    Given I open the home page
    Then category section should be visible

  Scenario: 15 Product list exists
    Given I open the home page
    Then product list should exist