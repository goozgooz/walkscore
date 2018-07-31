'use strict';

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

module.exports = (data) => {
  let headers = data.headers;
  let records = data.patients;
  
  const csvWriter = createCsvWriter({
    path: __dirname + '/../output.csv',
    header: headers,
  });
  
  csvWriter.writeRecords(records)
    .then(() => {
      console.log('CSV Completed');
    })
    .catch(console.log);
};