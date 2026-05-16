Feature: Search

  Scenario: Search for valid product
    Given I open the home page
    When I search for valid product in search page
    Then search results should appear

  Scenario: Search for invalid product
    Given I open the home page
    When I search for invalid product in search page
    Then no search results should appear