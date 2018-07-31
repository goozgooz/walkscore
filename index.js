'use strict';

const getData = require('./lib/import-data.js');
const parseData = require('./lib/parse-data.js');
const writeData = require('./lib/write-data.js');

let walkscoreReport = (csv) => {
  getData(csv)
    .then(parseData)
    .then(results => {
      writeData(results,csv);
    })
    .catch(console.log);
};

walkscoreReport(process.argv[2]);