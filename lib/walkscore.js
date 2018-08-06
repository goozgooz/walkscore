'use strict';

require('dotenv').config();
const superagent = require('superagent');
const queryString = require('query-string');

const walkscoreUrl = `http://api.walkscore.com/score?format=json&transit=1&bike=1&wsapikey=${process.env.WALKSCORE_KEY}&`;
const geocodeUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MAPQUEST_KEY}&outFormat=json&location=`;


module.exports = (data) => {
  return Promise.all(data.patients.map(compileData))
    .then(results => {
      data.headers.push({id: 'walkscore', title: 'walkscore'});
      data.results = results;
      return data;
    })
    .catch(console.log);
};

let compileData = (patient) => {
  return new Promise((resolve, reject) => {
    geocode(patient)
      .then(getWalkscore)
      .then(resolve)
      .catch(reject);
  });
};

let geocode = (data) => {
  return new Promise((resolve, reject) => {
    let location = data.AddressLine + ' ' + data.City + ' ' + data.State +  ' '  + data.ZipCode;
    superagent.get(geocodeUrl + location)
      .then(res => {
        data.latLng = res.body.results[0].locations[0].latLng;
        data.locationString = location;
        resolve(data);
      })
      .catch(reject);
  });
};

let getWalkscore = (data) => {
  return new Promise((resolve, reject) => {
    let user = {
      address: data.locationString,
      lat: data.latLng.lat,
      lon: data.latLng.lng,
    };
    
    let query = queryString.stringify(user);
    superagent.get(walkscoreUrl + query)
      .then(res => {
        res.body.walkscore ? data.walkscore = res.body.walkscore : data.walkscore = null;
        resolve(data);
      })
      .catch(reject);
  });
};
