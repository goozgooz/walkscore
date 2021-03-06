'use strict';

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

module.exports = (data, csv) => {
  let outputName = csv.split('.')[0] + '-result.csv';
  let headers = data.headers;
  let records = data.patients;
  const csvWriter = createCsvWriter({
    path: __dirname + '/../' + outputName,
    header: headers,
  });
  csvWriter.writeRecords(records)
    .then(() => {
      console.log('CSV Created!');
    })
    .catch(console.log);
};