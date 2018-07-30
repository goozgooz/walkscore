'use strict';

module.exports = (data) => {
  // parse csv file into rows
  let rows = data.split(',,,,,,,,,,,,,,,,,,,');

  // get just the title row of csv and make patient template 
  let columnTitles = rows[0].split(',');
  let template = createPatientTemplate(columnTitles);
  
  // take remaining rows of patients and format with object template 
  let formattedData = {};
  let patients = rows.slice(1,rows.length);
  for(let row of patients){
    let formattedPatient = createPatients(row, template);
    formattedData[formattedPatient['1: Member ID']] = formattedPatient;
  }
  
  // return one object containing all the patients formatted correctly
  return formattedData;
};


// creates the patient object template we will apply to each patient
let createPatientTemplate = (data) => {
  let objectModel = {};
  data.map((field,i) => {
    objectModel[i + ': ' + field] = null;  
  });
  return objectModel;
};

// use patient template to create the formatted patient object 
let createPatients = (row, template) => {
  let patientObject = Object.assign(template);
  let patientData = row.trim().split(',');
  patientData.map((data,i) => {
    for(let key in patientObject) {
      if(key.startsWith(i)) patientObject[key] = data;
    }
  });
 
  return patientObject;
};