    var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
  var  until = webdriver.until;
  



  driver.get('https://accounts.google.com/');
var keyword = driver.findElement(webdriver.By.id('identifierId'));

//console.log(keyword);
keyword.sendKeys("naveeza@gmail.com");
driver.findElement(webdriver.By.className('CwaK9')).click();
driver.findElement({xpath:'//*[@id="recoveryIdentifierId"]'}).sendKeys("test");
driver.findElement({xpath:'//*[@id="queryPhoneNext"]/content'}).click();
driver.findElement({xpath:'//*[@id="content"]/div[5]/div/div/div/p/a[1]'}).click();


//browser.findElement({id:'whsOnd zHQkBf'}).sendKeys('test');

//browser.findElement(webdriver.By.id('submit')).click();
//browser.navigate().refresh();//
//keyword.sendKeys("javascript");

//browser.get('https://www.indeed.com/resumes?q=javascript&l=Coimbatore%2C+Tamil+Nadu&cb=jt');
/////var ele =browser.findElement(webdriver.By.className('app_link')).click();

//browser.getTitle().then(function(title){
   // console.log(title);
//});

//var ele =browser.findElement(webdriver.By.className('alert_submit alert_register')).click();
//browser.close();









