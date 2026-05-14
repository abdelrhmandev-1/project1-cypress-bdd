Feature: Product

  Scenario: 4 Open first product details
    Given I open the home page
    When I open the first product
    Then product details should be visible

  Scenario: 5 Search then open first product
    Given I open the home page
    When I search for valid product
    And I open the first product
    Then product details should be visible

  Scenario: 6 Product card is clickable
    Given I open the home page
    When I open the first product
    Then product details should be visible