Feature: Product

  Scenario: Open first product details
    Given I open the home page
    When I open product details from product page
    Then product details page should be displayed

  Scenario: Search then open product details
    Given I open the home page
    When I search product before opening details
    And I open product details from product page
    Then product details page should be displayed