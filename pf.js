const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('blupdf.pdf');
 
pdf(dataBuffer).then(function(data) {
 
    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata); 
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log(data.version);
    // PDF text
    console.log(data.text); 
    var str = data.text;
    var Electricservice = str.indexOf("Electric service"); 
    console.log(Electricservice);
    var Energyconservationdiscount = str.indexOf("Energy conservation discount"); 
    console.log(Energyconservationdiscount);
    var fin = str.slice((Electricservice+16),(Energyconservationdiscount));
    console.log(fin);
    
});