package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CarsGuideHomePageLocators {

	@FindBy(how = How.LINK_TEXT, using = "buy + sell")
	public WebElement buySellLink;

	@FindBy(how = How.LINK_TEXT, using = "reviews")
	public WebElement reviewsLink;

	@FindBy(how = How.LINK_TEXT, using = "reviews")
	public WebElement newsLink;

	@FindBy(how = How.LINK_TEXT, using = "pricing + specs")
	public WebElement specs;

	@FindBy(how = How.LINK_TEXT, using = "Search Cars")
	public WebElement searchCars;

	@FindBy(how = How.LINK_TEXT, using = "Used")
	public WebElement usedCars;

}
