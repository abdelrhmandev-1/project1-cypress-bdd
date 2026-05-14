Feature: Project 2 Practice Software Testing

  Scenario: Search for valid product
    Given I open the home page
    When I search for valid product
    Then product results should be visible