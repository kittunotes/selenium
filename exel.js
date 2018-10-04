'use strict';
const excelToJson = require('convert-excel-to-json');
var http = require('http');
var https = require('https');

const result = excelToJson({
    sourceFile: 'EQUITY_L.xls',
    header: {
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1 // 2, 3, 4, etc.
    }
});

//console.log(result.Sheet1);

var data = result.Sheet1;
var cont=0;
data.forEach(function (value) {
    console.log(value.A);
var data = {
    "name":value.A
}

   // postData(data);
    cont = cont+1;
   // chrome(value.A);

});


function postData(data){

    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/trade/equities',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        //json:data
      };
    
      const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
          console.log('No more data in response.');
        });
      });
      
      req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
      });
      
      // write data to request body
      //convert to JSON notation
      //JSON.stringify(data);
      req.write(JSON.stringify(data));
      req.end();
}



  
  setTimeout(getMonthlyData, 15000);

function getMonthlyData(equity){
    console.log("Entering getMonthlyData--->");
    var url1 ='https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=NSE:';
    var url2 = '&outputsize=compact&apikey=MCAF9B429I44328U';
    var url =url1+url2;
    https.get(url, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
      

      console.log("Exiting getMonthlyData--->");
}





console.log('size------>'+cont);

function chrome(username) {
    var webdriver;
    var driver;
    webdriver = require('selenium-webdriver');
    driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions().build();
    driver.get('https://accounts.google.com/');
    driver.findElement(webdriver.By.id('identifierId')).sendKeys(username);
    driver.findElement(webdriver.By.className('CwaK9')).click();
    //driver.close();
}
