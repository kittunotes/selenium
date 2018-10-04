'use strict';
const excelToJson = require('convert-excel-to-json');
var http = require('http');
var https = require('https');

const result = excelToJson({
    sourceFile: 'EQUITY_L1-test.xls',
    header: {
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1 // 2, 3, 4, etc.
    }
});

//console.log(result.Sheet1);

var data = result.Sheet1;
var cont=0;
var arr =[];
data.forEach(function (value) {
    console.log(value.A);
var data = {
    "name":value.A
}

arr.push(value.A);
   // postData(data);
    cont = cont+1;
   // chrome(value.A);
   //getMonthlyData(value.A);
   console.log(arr.length);
   
});

var cou = arr.length;
interval();
function interval (){
  setInterval(call,30000)
};


function call(){
if(arr.length>0){
  console.log(arr[cou-1]);
  console.log('fun..'+cou);
  getMonthlyData(arr[cou-1]);
  cou = cou-1;
}

  
}


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

  
  

  function getEquityList(){
    console.log("Entering getEquityList--->");
    var url ='http://localhost:3000/trade/getEquities';
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
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
      

      console.log("Exiting getEquityList--->");
}


function getMonthlyData(equity){
    console.log("Entering getMonthlyData--->");
    var url1 ='https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=NSE:';
    var url2 = '&outputsize=compact&apikey=MCAF9B429I44328U';
    var c = equity.split(',');
    console.log('symbol---'+c);
    var url =url1+c[0]+url2;
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


function arrangeData(parsedData){
            var p = parsedData['Monthly Time Series'];
            var temp =[];
            var finObj ;var mongoData;


            
var data = parsedData;
 
for (const key in p) {
        
  finObj = {
      "trade_date":"",
      "open": "",
      "high": "",
      "low": "",
      "close": "",
      "volume": ""
  };
  if (p.hasOwnProperty(key)) {
      const element = p[key];
     //console.log(element['1. open']) ;
     finObj.trade_date = key;
     finObj.open = element['1. open'];
     finObj.high = element['2. high'];
     finObj.low = element['3. low'];
     finObj.close =element['4. close'];
     finObj.volume = element['5. volume'];
  }
  temp.push(finObj);
}

//console.log(temp);
var d = parsedData['Meta Data'];
var darry =[];
darry.push(d);
var d1 ;
var d2;
for (const key in d) {
  console.log(key);
if (d.hasOwnProperty(key)) {
  const element = d[key];
  console.log(element);
  if(key=='3. Last Refreshed'){
    
    d1= element;
  }
  else if(key=='2. Symbol'){
 d2 = element;
  }

}
}
console.log(d1);
console.log(d2);
//mongoData.month_data = temp;

//mongoData.symbol  =d2;

mongoData = {
  "month_data": temp,
  "last_Refreshed": d1,
  "symbol": d2
}
console.log('mongoData--------->'+JSON.stringify(mongoData));

postData1(mongoData);

}



function postData1(data){

  const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/trade/monthly',
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

