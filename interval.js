var fs = require('fs');
var http = require('https');
var json2xls = require('json2xls');
var json = {
    foo: 'bar',
    qux: 'moo',
    poo: 123,
    stux: new Date()
}



function intervalFunc() {
    console.log('Cant stop me now!');
var url ='https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=ARTZ4J2DQ8MJJUHT';
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
            var xls ;
          try {
              
              
            const parsedData = JSON.parse(rawData);
            var p = parsedData['Time Series (5min)'];
            var temp =[];
            var finObj ;
            
            for (const key in p) {
                    
                finObj = {
                    "time":"",
                    "open": "",
                    "high": "",
                    "low": "",
                    "close": "",
                    "volume": ""
                };
                if (p.hasOwnProperty(key)) {
                    const element = p[key];
                 //  console.log(element['1. open']) ;
                   finObj.time = key;
                   finObj.open = element['1. open'];
                   finObj.high = element['2. high'];
                   finObj.low = element['3. low'];
                   finObj.close =element['4. close'];
                   finObj.volume = element['5. volume'];
                    //element['2. high'];
                    //element['3. low'];
                    //element['4. close'];
                    //element['5. volume'];
                    //temp.push()
                    //console.log(key);
                   // console.log(element);
                }
                temp.push(finObj);
                
            }
// loop to get 5 mins data
console.log('processed....');
var finArry =[ {
    open: "110.2000"
},
{
     open: "110.2000",
}];

            xls = json2xls(temp);
           fs.writeFileSync('data.xlsx', xls, 'binary');
            //console.log(parsedData);
          } catch (e) {
            console.error(e.message);
          }
        });
      }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
      });



    
  }
  
  setInterval(intervalFunc, 15000);