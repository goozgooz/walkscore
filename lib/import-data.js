'use strict';

const fs = require('fs-extra');

module.exports = (csv) => {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/../' + csv, 'utf8')
      .then(data => {
        resolve (data);
      })
      .catch(err => {
        reject(err);
      });
  });
};