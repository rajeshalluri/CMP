@Search-Used-Cars
Feature: Acceptance testing to validate Search cars page is working fine
  In order to validate that
  the search cars page is working fine
  we will do the acceptance testing

  @Search-UsedCar-Positive
  Scenario: CarsGuide Search page AUDI validation
    Given I am on the Home Page "http://www.carsguide.com.au" of Car Guide website
    When move to "buy + sell"
    And click on used "Search Cars" link
    And select carbrand as "Audi" from AnyMake dropdown
    And select carmodel as "A1" from SelectModel dropdown
    And select location as "ACT - All" from SelectLocation dropdown
    And select price as "$20,000" from price dropdown
    And click on Find_My_Next_Car button
    Then I should see list of searched cars from "Audi"
    And the page title should be "Used Audi A1 Under 20000 for Sale ACT | carsguide"
    And the page version should be "2.0"
