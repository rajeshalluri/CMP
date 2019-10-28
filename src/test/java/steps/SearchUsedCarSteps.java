package steps;

import cucumber.api.java.en.And;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.CarsSearchPageActions;

public class SearchUsedCarSteps {
	
	CarsGuideHomePageActions carsGuideHomePageActions= new CarsGuideHomePageActions();
	CarsSearchPageActions carsSearchPageActions=new CarsSearchPageActions();

	@And("^click on used \"([^\"]*)\" link$")
	public void click_on_used(String searchCars) throws Throwable {
		
		carsGuideHomePageActions.clickOnUsedSearchCarsMenu();
		
	}
	
}
