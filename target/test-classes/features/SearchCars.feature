@Search-Cars
Feature: Acceptance testing to validate Search cars page is working fine
  In order to validate that
  the search cars page is working fine
  we will do the acceptance testing

  @Search-Car-Positive
  Scenario: CarsGuide Search page BMW validation
    Given I am on the Home Page "http://www.carsguide.com.au" of Car Guide website
    When move to "buy + sell"
    And click on "Search Cars" link
    And select carbrand as "BMW" from AnyMake dropdown
    And select carmodel as "1 Series" from SelectModel dropdown
    And select location as "ACT - All" from SelectLocation dropdown
    And select price as "$10,000" from price dropdown
    And click on Find_My_Next_Car button
    Then I should see list of searched cars from "BMW"
    And the page title should be "Bmw 1 Series Under 10000 for Sale ACT | carsguide"
    And the page version should be "1.0"
