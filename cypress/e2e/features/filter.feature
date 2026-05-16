Feature: Filter

  Scenario: Filter by category
    Given I open the home page
    When I select category from filter page
    Then filtered product results should be visible

  Scenario: Verify category section
    Given I open the home page
    Then category area should be visible