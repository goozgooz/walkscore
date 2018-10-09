'use strict';

const fs= require('fs');
const parseData = require('../lib/parse-data.js');
const mockCSV = fs.readFileSync(__dirname + '/lib/mock.csv', 'utf8' );

describe('parse-data function', () => {
  let result = parseData(mockCSV);

  test('should return an object with the csv headers in one key', () => {
    expect(result).toHaveProperty('headers');
    expect(result.headers.length).toEqual(8);
  });
  test('should return an object with patients in the other key', () => {
    expect(result).toHaveProperty('patients');
    expect(result.patients.length).toEqual(2);
  });

});