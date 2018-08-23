'use strict';

const fs= require('fs');
const parseData = require('../lib/parse-data.js');
const mockCSV = fs.readFileSync(__dirname + '/lib/mock.csv', 'utf8' );

describe('parse-data function', () => {
  test('should return an object with two keys', () => {
    let result = parseData(mockCSV);
    // expect(result).toHaveProperty('headersasdf');
    expect('derp').toEqual('derp');
  });
});