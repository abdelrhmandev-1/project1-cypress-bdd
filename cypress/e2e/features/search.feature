Feature: Search

  Scenario: 1 Search for valid product
    Given I open the home page
    When I search for valid product
    Then product results should be visible

  Scenario: 2 Search for invalid product
    Given I open the home page
    When I search for invalid product
    Then no product results should be visible

  Scenario: 3 Verify search input accepts text
    Given I open the home page
    When I type valid product in search input
    Then search input should contain valid product