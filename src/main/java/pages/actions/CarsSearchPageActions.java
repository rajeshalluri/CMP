package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.CarSearchPageLocators;
import utils.SeleniumDriver;

public class CarsSearchPageActions {

	CarSearchPageLocators carSearchPageLocators = null;

	public CarsSearchPageActions() {

		this.carSearchPageLocators = new CarSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carSearchPageLocators);
	}

	public void selectCarMake(String carBrand) {

		Select selectCarMaker = new Select(carSearchPageLocators.selectMakeDropDown);
		selectCarMaker.selectByVisibleText(carBrand);

	}

	public void selectCarModel(String carModel) {

		Select selectModelDropDown = new Select(carSearchPageLocators.selectModelDropDown);
		selectModelDropDown.selectByVisibleText(carModel);

	}

	public void selectCarLocation(String carLocation) {

		Select selectLocationDropDown = new Select(carSearchPageLocators.selectLocationDropDown);
		selectLocationDropDown.selectByVisibleText(carLocation);

	}

	public void selectCarPrice(String carPrice) {

		Select selectPriceDropDown = new Select(carSearchPageLocators.selectPriceDropDown);
		selectPriceDropDown.selectByVisibleText(carPrice);

	}

	public void clickOnFindMyNextCarButton() {

		carSearchPageLocators.findMyNextCarButton.click();
	}
}
