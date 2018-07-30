'use strict';

module.exports = (data) => {
  // parse csv file into separate rows
  let rows = data.split(',,,,,,,,,,,,,,,,,,,');

  // get just the title row (the first row) of the csv and make patient template 
  let columnTitles = rows[0].split(',');
  let template = createPatientTemplate(columnTitles);
  
  // take remaining rows of patients and format with object template 
  let formattedPatientData = {};
  let patientRows = rows.slice(1,rows.length);
  for(let row of patientRows){
    let formattedPatient = createPatients(row, template);
    formattedPatientData[formattedPatient['1: Member ID']] = formattedPatient;
  }
  
  // return one object containing all the patients formatted correctly and the column titles for exporting purposes later
  return {data: formattedPatientData, columnTitles: columnTitles};
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