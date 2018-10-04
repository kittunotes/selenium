var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
  
  driver.get('https://www.indeed.co.in/');
driver.findElement(webdriver.By.id('userOptionsLabel')).click();
driver.findElement({xpath:'//*[@id="googleForm"]/button'}).click();
driver.findElement({xpath:'//*[@id="identifierNext"]/content'}).click();



