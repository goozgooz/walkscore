'use strict';

module.exports = (data) => {
  let results = {
    headers: null,
    patients: [],
  };
  let rows = data.split(',,,,,,,,,,,,,,,,,,,');       // parse csv file into separate rows   
  rows.pop();       // using .pop() to remove last item, which is empty string due to csv format

  // get just the title row (the first row) of the csv and make patient template based on column titles 
  let titleRow = rows[0].split(',');
  let titles = createPatientTemplate(titleRow);
  results.headers = titles.headers;
  
  // take remaining rows of patients and format with object template and store in results.patients array
  let patientRows = rows.slice(1,rows.length);
  results.patients = patientRows.reduce((patients, row) => {
    let formattedPatient = createPatients(row, titles.indexedTemplate);
    patients.push(formattedPatient);
    return patients;
  }, results.patients);
  return results;
};


// HELPER FUNCTIONS

// creates the patient object template we will apply to each patient as well as normal headers for csv export later
let createPatientTemplate = (data) => {
  let results = {
    headers: [],
    indexedTemplate: {},
  };
  
  data.map((field,i) => {
    results.indexedTemplate[i + ': ' + field] = null;  
    results.headers.push({
      id: field,
      title: field,
    });
  });
  
  return results;
};


// use patient template to create the formatted patient object 
let createPatients = (row, template) => {
  // use this to match patient data to correct column via index and the matching index column in obj 
  let patientObject = Object.assign(template);
  // but we actually store data in a object without the index added to the column title
  let formattedObject = {};
  let patientData = row.trim().split(',');
  patientData.map((data,i) => {
    for(let key in patientObject) {
      let formattedKey = key.split(': ')[1];
      if(key.startsWith(i)) formattedObject[formattedKey] = data;
    }
  });
  return formattedObject;
};