package steps;

import java.util.List;

import org.openqa.selenium.By;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.CarsSearchPageActions;
import utils.SeleniumDriver;

public class SearchCarsSteps {
	
	CarsGuideHomePageActions carsGuideHomePageActions= new CarsGuideHomePageActions();
	CarsSearchPageActions carsSearchPageActions=new CarsSearchPageActions();

	@Given("^I am on the Home Page \"([^\"]*)\" of Car Guide website$")
	public void i_am_on_the_Home_Page_of_Car_Guide_website(String websiteURL) throws Throwable {
		
		SeleniumDriver.openPage(websiteURL);
	}
	

	@When("^move to \"([^\"]*)\"")
	public void move_to(String buysell) throws Throwable {
		
		carsGuideHomePageActions.moveToCarsForSaleMenu();	
		
		
	}

	@And("^click on \"([^\"]*)\" link$")
	public void click_on_link(String searchCars) throws Throwable {
		
		carsGuideHomePageActions.clickOnSearchCarsMenu();
		
	}

	@And("^select carbrand as \"([^\"]*)\" from AnyMake dropdown$")
	public void select_carbrand_as_from_AnyMake_dropdown(String carBrand) throws Throwable {
		
		carsSearchPageActions.selectCarMake(carBrand);
		
	}

	@And("^select carmodel as \"([^\"]*)\" from SelectModel dropdown$")
	public void select_carmodel_as_from_SelectModel_dropdown(String carModel) throws Throwable {
		
		carsSearchPageActions.selectCarModel(carModel);
		
	}

	@And("^select location as \"([^\"]*)\" from SelectLocation dropdown$")
	public void select_location_as_from_SelectLocation_dropdown(String carLocation) throws Throwable {
		
		carsSearchPageActions.selectCarLocation(carLocation);
				
	}

	@And("^select price as \"([^\"]*)\" from price dropdown$")
	public void select_price_as_from_price_dropdown(String carPrice) throws Throwable {
		
		carsSearchPageActions.selectCarPrice(carPrice);
		
	}

	@And("^click on Find_My_Next_Car button$")
	public void click_on_Find_My_Next_Car_button() throws Throwable {
		
		carsSearchPageActions.clickOnFindMyNextCarButton();
	}

	@And("^I should see list of searched cars from \"([^\"]*)\"$")
	public void i_should_see_list_of_searched_cars_from(String cars) throws Throwable {
		
		org.testng.Assert.assertTrue(SeleniumDriver.getDriver()
				.findElement(By.xpath(
						"//a[@id='pos0']//div[contains(@class,'carListing--content')]//div[2]//div[1]//div[1]//h5[1]"))
				.getText().contains(cars));
	}

	@Then("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String expected) throws Throwable {		
		org.testng.Assert.assertEquals(expected,SeleniumDriver.getDriver().getTitle().toString());		

	}
	
	@And("^the page version should be \"([^\"]*)\"$")
	public void the_page_version_should_be(String expected) throws Throwable {
		org.testng.Assert.assertEquals("1.0",expected);
	}
	

}
