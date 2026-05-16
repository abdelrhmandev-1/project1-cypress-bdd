Feature: Cart

  Scenario: Add product to cart
    Given I open the home page
    When I search product before adding to cart
    And I open product for cart
    And I add product from cart scenario
    Then cart success message should be displayed

  Scenario: Open cart page
    Given I open the home page
    When I open cart from cart page
    Then cart checkout page should be displayed