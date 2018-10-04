var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

var until= require('selenium-webdriver').until;

driver.get('https://kite.zerodha.com/');
//driver.get('http://blu365.com/BillProcessing/Batch.aspx');

driver.findElement({xpath:'//*[@id="container"]/div/div/div/form/div[2]/input'}).sendKeys("DB1469");
driver.findElement({xpath:'//*[@id="container"]/div/div/div/form/div[3]/input'}).sendKeys("Sadguru@12");
driver.findElement({xpath:'//*[@id="container"]/div/div/div/form/div[4]/button'}).click();
driver.findElement({xpath:'//*[@id="container"]/div/div/div/form/div[2]/div/input'}).sendKeys("White");
driver.findElement({xpath:'//*[@id="container"]/div/div/div/form/div[3]/div/input'}).sendKeys("Iphone");
driver.findElement({xpath:'//*[@id="container"]/div/div/div/form/div[2]/div/input'}).sendKeys("Iphone");
driver.findElement({xpath:'//*[@id="container"]/div/div/div/form/div[3]/div/input'}).sendKeys("2015");
driver.findElement({xpath:'//*[@id="container"]/div/div/div/form/div[4]/button'}).click();
driver.findElement({xpath:'//*[@id="app"]/div[1]/div/div[2]/div[1]/a[2]'}).click();
driver.findElement({xpath:'//*[@id="mobile-context-menu-2362"]/ul/li[1]/a'}).click();
driver.findElement(webdriver.By.css("card"));
driver.executeScript("return document.getElementsByClassName('card');", card).then(function(el){
});

driver.executeScript("return document.evaluate('//*[@title]', document, null, XPathResult.ANY_TYPE, null)");
driver.findElement(webdriver.By.xpath('//*[@id="app"]/div[2]/div/div[2]/div/div[2]/div/div[3]')).click();
driver.findElement(webdriver.By.xpath('//*[@id="mobile-context-menu-495"]/ul/li[1]/a')).click();
driver.findElement(webdriver.By.xpath('//*[@id="app"]/div[3]/div/form/div[3]/div[3]/div[2]/button[2]')).click();
driver.findElement(webdriver.By.xpath('//*[@id="app"]/div[2]/div/div[2]/div/section[1]/div/div/div[2]')).click();
driver.findElements(webdriver.By.xpath('//*[@id="app"]/div[2]/div/div/div/div[2]')).then(function(elems){
console.log(elems.values);

});
var lst;
driver.findElements(webdriver.By.className('vddl-draggable')).then(function(elems){
console.log(elems.length);
lst = elems.length;
});

for(var i=1;i<lst;i++){
    console.log(i);
    var path= '//*[@id="app"]/div[2]/div/div/div/div[2]/div/div['+i+']';
    var j =i-1;
    var val = '//*[@id="app"]/div[2]/div/div/div/div[2]/div/div['+i+']/div/div/span[1]/span[1]';
    console.log(path);
    console.log(val);
    driver.findElement({xpath:path});
    driver.findElement({xpath:val}).getText().then(function(el){
        console.log(el);

        if(el==='WIPRO'){
            driver.findElement({xpath:path}).click();
        }
    });
    
}
var buy;
driver.findElement(webdriver.By.className('mobile-context-menu')).findElements(webdriver.By.tagName('span')).then(function(el){
    console.log(el.length);
    console.log(el.keys());
    driver.findElement(webdriver.By.partialLinkText("BUY")).click();
});

//*[@id="mobile-context-menu-1280"]/ul/li[1]/a
//*[@id="mobile-context-menu-1283"]/ul/li[1]/a
//*[@id="mobile-context-menu-1286"]/ul/li[1]/a
//*[@id="mobile-context-menu-1289"]/ul/li[1]/a
//*[@id="mobile-context-menu-1295"]/ul/li[1]/a
//*[@id="mobile-context-menu-1298"]/ul/li[2]/a
//*[@id="mobile-context-menu-1603"]/ul/li[7]/ul/li[2]/a
//*[@id="mobile-context-menu-1855"]/ul/li[1]/a/span


//*[@id="app"]/div[2]/div/div/div/div[2]/div/div[2]/div/div/span[1]/span
//*[@id="app"]/div[2]/div/div/div/div[2]/div/div[1]/div/div/span[1]/span[1]
//*[@id="app"]/div[2]/div/div/div/div[2]/div/div[2]/div/div/span[1]/span
//*[@id="app"]/div[2]/div/div/div/div[2]/div/div[1]/div/div/span[1]/span[1]
//*[@id="app"]/div[2]/div/div/div/div[2]/div/div[3]/div/div/span[1]/span[1]
//*[@id="app"]/div[2]/div/div/div/div[2]/div/div[1]/div/div/span[1]/span[1]
//*[@id="app"]/div[2]/div/div/div/div[2]/div/div[2]/div/div/span[1]/span
//*[@id="app"]/div[2]/div/div/div/div[2]/div/div[1]
//*[@id="app"]/div[2]/div/div/div/div[2]/div/div[2]








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
