'use strict';
var http = require('http');

getMonthlyData();
function getMonthlyData() {
  var url = "http://localhost:3000/trade/getMonthly";
  http.get(url, (res) => {
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
        arrangeData(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
  console.log("Exiting getMonthlyData--->");
}


var monthlyArray = [];

function calculatePercentMonth(todaycloseprice, prevlatestcloseprice) {
  //% 1 month (today close price - 30(close price))/30(close price)
  var perMonth = (todaycloseprice-prevlatestcloseprice)/(prevlatestcloseprice);
return perMonth;
}
var flag = true;
var todaycloseprice ;
var prevlatestcloseprice;
var volume;
var perMonth;
var finObj;
function arrangeData(parsedData) {
  parsedData.forEach(function (value) {

    finObj = {
      "symbol":"",
      "price": "",
      "volume": "",
      "monthlyPercent":""
    }

    //console.log(value['symbol']);
   // console.log(value['month_data'].length);
  //console.log(value['month_data'][0]);

    if (flag) {
      var latest = value['month_data'][0];
      var prevlatest = value['month_data'][1];
      
      for (var p in latest) {
        if ('close' == p) {
          todaycloseprice = latest[p];
          //console.log(latest[p]);
        }
        else if ('volume' == p) {
          volume = latest[p];
        }
      }

      for (var q in prevlatest) {
        if ('close' == q) {
          prevlatestcloseprice = prevlatest[q];
         // console.log(prevlatest[q]);
        }
      }

       perMonth = calculatePercentMonth(todaycloseprice,prevlatestcloseprice);
      

      flag = false;
    }
    finObj.symbol =value['symbol'] ;
      finObj.price = todaycloseprice;
      finObj.volume = volume;
      finObj.monthlyPercent = perMonth;
      //console.log(finObj);
    monthlyArray.push(finObj);
   console.log(monthlyArray);
  });

}

