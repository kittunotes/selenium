var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

var until= require('selenium-webdriver').until;

driver.get('http://blu365.com/');
//driver.get('http://blu365.com/BillProcessing/Batch.aspx');
driver.findElement(webdriver.By.id('txtUserName')).sendKeys("DataEntry8");
driver.findElement(webdriver.By.id('txtPassword')).sendKeys("DataEntry#8");
driver.findElement(webdriver.By.id('btnSignIn')).click();

//wait for sometime
driver.wait(until.elementLocated({xpath:'//*[@id="BatchGrid_ctl00_ctl04_EditLink"]'})).click();
//driver.wait(until.elementLocated({xpath:'//*[@id="TotalAmt"]'})).sendKeys("");
//driver.sleep(90000);
//driver.wait(until.elementLocated({xpath:'//*[@id="LateAmt"]'})).then(function(LateAmt){
    driver.wait(until.elementLocated({xpath:'//*[@id="RemainingAmt"]'})).sendKeys(" ");
    driver.sleep(3000);
    //console.log(driver.wait(until.(webdriver.By.id('LateAmt'))));
    driver.sleep(3000);
    driver.wait(until.elementLocated({xpath:'//*[@id="LateAmt"]'})).sendKeys("101");
    driver.sleep(3000);
    driver.wait(until.elementLocated({xpath:'//*[@id="AdjustmentAmt"]'})).sendKeys(" ");
    //driver.executeScript

    //driver.sleep(2000);
   // driver.findElement({xpath:'//*[@id="SaveButton"]'}).click();
    //*[@id="SaveButton"]
    driver.sleep(15000);
//});
//driver.sleep(5000);

driver.wait(until.elementLocated({xpath:'//*[@id="NotesButton_input"]'})).click();
driver.wait(until.elementLocated({xpath:'//*[@id="CancelButton_input"]'})).click();
driver.wait(until.elementLocated({xpath:'//*[@id="SaveButton"]'})).click();

//driver.sleep(40000);

   // driver.quit();


//driver.findElement({xpath:'//*[@id="BatchGrid_ctl00_ctl02_ctl02_FilterTextBox_VendorNm"]'}).sendKeys("Duke Energy Progress");
                             //*[@id="BatchGrid_ctl00_ctl02_ctl02_FilterTextBox_VendorNm"]
//driver.findElement({xpath:'//*[@id="BatchGrid_ctl00_ctl02_ctl02_Filter_VendorNm"]'}).click();

//var loop =driver.findElement({xpath:'//*[@id="BatchGrid_rfltMenu_detached"]/ul/li[2]/a/span'}).findElements({tagName:"li"});
//console.log(loop.length;






//driver.findElement({xpath:'//*[@id="BatchGrid_ctl00_ctl02_ctl02_FilterTextBox_CustomerNm"]'}).sendKeys("Casa De Luna");
//*[@id="BatchGrid_ctl00_ctl02_ctl02_FilterTextBox_CustomerNm"]
//*[@id="BatchGrid_ctl00_ctl02_ctl02_FilterTextBox_VendorNm"]
//*[@id="BatchGrid_ctl00_ctl02_ctl02_FilterTextBox_VendorNm"]
//driver.findElement(webdriver.By.className('CwaK9')).click();
