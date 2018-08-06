'use strict';

require('dotenv').config();
const superagent = require('superagent');
const queryString = require('query-string');

const walkscoreUrl = `http://api.walkscore.com/score?format=json&transit=1&bike=1&wsapikey=${process.env.WALKSCORE_KEY}&`;
const geocodeUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MAPQUEST_KEY}&outFormat=json&location=`;


module.exports = (data) => {
  let patient = data.patients[0];
  
  geocode(patient)
    .then(getWalkscore)
    .then(console.log)
    .catch(err => {
      console.log('bye');
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
    console.log(walkscoreUrl + query);
    superagent.get(walkscoreUrl + query)
      .then(res => {
        data.walkscore = res.body.walkscore;
        data.bikescore = res.body.bike.score;
        resolve(data);
      })
      .catch(reject);
  });
};
