'use strict';

const getData = require('./lib/import-data.js');
const parseData = require('./lib/parse-data.js');
const getWalkscore = require('./lib/walkscore.js');
const writeData = require('./lib/write-data.js');
const chart = require('./lib/chart.js');

let walkscoreReport = (csv) => {
  getData(csv)
    .then(parseData)
    .then(getWalkscore)
    .then(results => {
      writeData(results,csv);   //create updated csv file with WalkScore 
      chart(results, csv);      //create scatter plot chart and R^2 
    })
    .catch(console.log);
};

// will run app passing in the .csv filed provided on the command line
walkscoreReport(process.argv[2]);