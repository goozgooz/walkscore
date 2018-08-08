require('dotenv').config();
const plotly = require('plotly')('goozgooz', process.env.PLOTLY_KEY);

// module.exports = (data) => {
//   let dataPoints = [
//     {
//       x:[],
//       y:[],
//       type: 'scatter',
//     },
//   ];
  
//   data.patients.map(patient => {
//     dataPoints[0].x.push(patient.Walkscore);
//     dataPoints[0].y.push(parseFloat(patient.WeightLoss));
//     return dataPoints;
//   });  
//   console.log(dataPoints);
// };

let dataPoints = [{ 
  x: [ 40, 26, 7, 5, 22, 1, 32, 0, 51, 39, 18, 11, 19, 23, 4, 8, 13, 30, 0, 8, 35, 34 ],
  y: [ 0, 0, 4.52, 3.43, 0.47, 13.63,12.62, 0, 7.05, 8.33, 6.58, 0.52, 2.66, 0, 0, 0.46, -0.19, 8.38, 0, 8.85, 1.16, 3.85],
  mode: 'markers', type: 'scatter', 
}];

let layout = {
  xaxis: {
    title: 'WalkScore',
  },
  yaxis: {
    title: 'Weight Loss %',
  },
};

let imgOpts= {
  format: 'png',
  width: 800,
  height: 800,
}
  
let graphOptions = {layout: layout, filename: 'test-graph', fileopt: 'overwrite'};
plotly.plot(dataPoints, graphOptions, (err,msg) => {
  if (err) console.log(err);
  if (msg) console.log(msg);
});