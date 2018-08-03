'use strict';

require('dotenv').config();
const superagent = require('superagent');
const urlEncode = require('urlencode');

module.exports = (data) => {
  let apiUrl = 'http://api.walkscore.com/score';
  let patient = data.patients[0];
  
  geocode(patient)
    .then(getWalkscore)
    .catch(err => {
      console.log('bye');
    });

  // superagent.get(`http://api.walkscore.com/score?format=json&addres=1119%8th%20Avenue%20Seattle%20WA%2098101&lat=47.6085&lon=-122.3295&transit=1&bike=1&wsapikey=${process.env.WALKSCORE_KEY}`)
  //   .then(res => {
  //     console.log(res.body);
  //   })
  //   .catch(console.log);
};

let geocode = (data) => {
  return new Promise((resolve, reject) => {
    let location = data.AddressLine + '+' + data.City + '+' + data.State + '+'  + data.ZipCode;
    superagent.get(`https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MAPQUEST_KEY}&outFormat=json&location=${location}`)
      .then(res => {
        data.latLng = res.body.results[0].locations[0].latLng;
        data.locationString = location;
        resolve(data);
      })
      .catch(reject);
  });
};

let getWalkscore = (data) => {
  console.log(urlEncode(data.locationString));
};
