module.exports = (data) => {
  let dataPoints = data.patients.map(patient => {
    return [patient.Walkscore, parseFloat(patient.WeightLoss)];
  });  
  
};