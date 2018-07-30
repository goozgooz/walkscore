'use strict';

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

module.exports = (data) => {
  let headers = data.columnTitles.map(title => {
    console.log(title);
  })
  // const csvWriter = createCsvWriter({
  //   path: '__dirname/output.csv',
  //   header: [
  //     ]
  // })
  // console.log(data.columnTitles);
};