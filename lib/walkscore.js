'use strict';

require('dotenv').config();
const superagent = require('superagent');
const urlEncode = require('urlencode');

module.exports = (data) => {
  let apiUrl = 'http://api.walkscore.com/score';
  let patient = data.patients[0];
  
  superagent.get(`http://api.walkscore.com/score?format=json&addres=1119%8th%20Avenue%20Seattle%20WA%2098101&lat=47.6085&lon=-122.3295&transit=1&bike=1&wsapikey=${process.env.WALKSCORE_KEY}`)
    .then(data => {
      console.log(data);
    })
    .catch(console.log);


  // console.log(urlEncode(patient.AddressLine + ' ' + patient.AddressLine2 + ' ' + patient.City + ' ' + patient.State + ' ' + patient.ZipCode));
  // console.log('1119%8th%20Avenue%20Seattle%20WA%2098101')
};