'use strict';

const getData = require('./lib/import-data.js');
const parseData = require('./lib/parse-data.js');

let walkscoreReport = (csv) => {
  getData(csv)
    .then(parseData)
    .catch(console.log);
};

walkscoreReport(process.argv[2]);