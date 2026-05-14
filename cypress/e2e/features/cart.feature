Feature: Cart

  Scenario: 7 Open cart page
    Given I open the home page
    When I open the cart page
    Then cart page should open

  Scenario: 8 Add product to cart
    Given I open the home page
    When I open the first product
    And I add the product to cart
    Then product should be added to cart

  Scenario: 9 Add searched product to cart
    Given I open the home page
    When I search for valid product
    And I open the first product
    And I add the product to cart
    Then product should be added to cart