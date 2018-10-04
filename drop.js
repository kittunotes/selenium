var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
 
driver.get('http://www.thetestroom.com/webapp');
driver.findElement(webdriver.By.id('adoption_link')).click();
selectFromDropdown('today');
//driver.quit();
driver.sleep(3000);
 
function selectFromDropdown(value){
    const valueSelected = webdriver.By.css('[id="start_select"]' + 'option[value="' + value + '"]');
    console.log(valueSelected);
    driver.findElement(webdriver.By.css('[id="start_select"]')).click();
    driver.findElement(valueSelected).click();
}
