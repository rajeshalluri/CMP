$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Search cars page is working fine",
  "description": "In order to validate that\nthe search cars page is working fine\nwe will do the acceptance testing",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 9983509000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "CarsGuide Search page BMW validation",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine;carsguide-search-page-bmw-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Search-Car-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"http://www.carsguide.com.au\" of Car Guide website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "move to \"buy + sell\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select carbrand as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select carmodel as \"1 Series\" from SelectModel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select location as \"ACT - All\" from SelectLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select price as \"$10,000\" from price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see list of searched cars from \"BMW\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the page title should be \"Bmw 1 Series Under 10000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the page version should be \"1.0\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_Car_Guide_website(String)"
});
formatter.result({
  "duration": 3129234700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 9
    }
  ],
  "location": "SearchCarsSteps.move_to(String)"
});
formatter.result({
  "duration": 295605000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_link(String)"
});
formatter.result({
  "duration": 317711300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 1186502100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carmodel_as_from_SelectModel_dropdown(String)"
});
formatter.result({
  "duration": 801131100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_SelectLocation_dropdown(String)"
});
formatter.result({
  "duration": 152833500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 17
    }
  ],
  "location": "SearchCarsSteps.select_price_as_from_price_dropdown(String)"
});
formatter.result({
  "duration": 137884300,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 4067847400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 41
    }
  ],
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars_from(String)"
});
formatter.result({
  "duration": 240338800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 10000 for Sale ACT | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 25209300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.0",
      "offset": 28
    }
  ],
  "location": "SearchCarsSteps.the_page_version_should_be(String)"
});
formatter.result({
  "duration": 67500,
  "status": "passed"
});
formatter.after({
  "duration": 4666226400,
  "status": "passed"
});
formatter.uri("SearchUsedCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Search cars page is working fine",
  "description": "In order to validate that\nthe search cars page is working fine\nwe will do the acceptance testing",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Used-Cars"
    }
  ]
});
formatter.before({
  "duration": 9219878100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "CarsGuide Search page AUDI validation",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine;carsguide-search-page-audi-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Search-UsedCar-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"http://www.carsguide.com.au\" of Car Guide website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "move to \"buy + sell\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "click on used \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "select carbrand as \"Audi\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select carmodel as \"A1\" from SelectModel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select location as \"ACT - All\" from SelectLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select price as \"$20,000\" from price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see list of searched cars from \"Audi\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the page title should be \"Used Audi A1 Under 20000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the page version should be \"2.0\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_Car_Guide_website(String)"
});
formatter.result({
  "duration": 2888988700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 9
    }
  ],
  "location": "SearchCarsSteps.move_to(String)"
});
formatter.result({
  "duration": 294024500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 15
    }
  ],
  "location": "SearchUsedCarSteps.click_on_used(String)"
});
formatter.result({
  "duration": 1896543400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carbrand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 300643000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_carmodel_as_from_SelectModel_dropdown(String)"
});
formatter.result({
  "duration": 689733300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_SelectLocation_dropdown(String)"
});
formatter.result({
  "duration": 129509300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 17
    }
  ],
  "location": "SearchCarsSteps.select_price_as_from_price_dropdown(String)"
});
formatter.result({
  "duration": 132594200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 3801015800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 41
    }
  ],
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars_from(String)"
});
formatter.result({
  "duration": 158101300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A1 Under 20000 for Sale ACT | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 5708000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.0",
      "offset": 28
    }
  ],
  "location": "SearchCarsSteps.the_page_version_should_be(String)"
});
formatter.result({
  "duration": 906700,
  "error_message": "java.lang.AssertionError: expected [2.0] but found [1.0]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat steps.SearchCarsSteps.the_page_version_should_be(SearchCarsSteps.java:95)\r\n\tat ✽.And the page version should be \"2.0\"(SearchUsedCars.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5101184400,
  "status": "passed"
});
});