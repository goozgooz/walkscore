'use strict';

module.exports = (data) => {
  // parse csv file into rows
  let rows = data.split(',,,,,,,,,,,,,,,,,,,');

  // get just the title row of csv and make patient template 
  let columnTitles = rows[0].split(',');
  let template = createPatientTemplate(columnTitles);
  
  // take remaining rows of patients and format with object template 
  let patients = rows.slice(1,rows.length);
  for(let row of patients){
    createPatients(row, template);
  }
};


// creates the patient object template we will apply to each patient
let createPatientTemplate = (data) => {
  let objectModel = {};
  data.map((field,i) => {
    objectModel['Column ' + i + ': ' + field] = null;  
  });
  return objectModel;
};

// use patient template to create the patients 
let createPatients = (row, template) => {
  let patientObject = Object.assign(template);
  let patientFields = row.trim().split(',');
  for(let i of patientFields) {
    patientObject
  }

};