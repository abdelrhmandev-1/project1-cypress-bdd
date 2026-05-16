Feature: Cart

  Scenario: Open cart page
    Given I open the home page
    When I open cart from cart page
    Then cart checkout page should be displayed

  Scenario: Add product to cart
    Given I open the home page
    When I open product for cart
    And I add product from cart scenario
    Then cart success message should be displayed