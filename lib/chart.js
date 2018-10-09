require('dotenv').config();
const fs = require('fs');
const plotly = require('plotly')('goozgooz', process.env.PLOTLY_KEY);
const regression = require('regression');

module.exports = (data, csv) => {
  let outputName = csv.split('.')[0] + '-chart';
  let dataPoints = [{ x:[], y:[], type: 'scatter', mode: 'markers'}];
  let dataPairs = [];
  let layout = {xaxis: {title: 'WalkScore'}, yaxis: {title: 'Weight Loss %'}};
  let imgOpts= {format: 'png', width: 800, height: 800};
  let figure = {'data': dataPoints, layout: layout};
  
  data.patients.map(patient => {
    dataPoints[0].x.push(patient.Walkscore);
    dataPoints[0].y.push(parseFloat(patient.WeightLoss));
    dataPairs.push([patient.Walkscore, parseFloat(patient.WeightLoss)]);
    return dataPoints, dataPairs;
  });  
  
  plotly.getImage(figure, imgOpts, (err,imageStream) => {
    if(err) return console.log(err);
    
    let fileStream = fs.createWriteStream(`${outputName}.png`);
    imageStream.pipe(fileStream);
    console.log('Chart Created!');
  });
  console.log(dataPairs);
  console.log('R^2 Coeffeicient: ' + regression.linear(dataPairs).r2);
};