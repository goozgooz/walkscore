const regression = require('regression');

// const data = [[1,4], [2,8], [3,24]];

let blep = [
  [ 40, 26, 7, 5, 22, 1, 32, 0, 51, 39, 18, 11, 19, 23, 4, 8, 13, 30, 0, 8, 35, 34 ],
  [ 0, 0, 4.52, 3.43, 0.47, 13.63,12.62, 0, 7.05, 8.33, 6.58, 0.52, 2.66, 0, 0, 0.46, -0.19, 8.38, 0, 8.85, 1.16, 3.85],
];

let data = [];

for(let i=0; i<blep[0].length; i++){
  data.push([blep[0][i], blep[1][i]]);
}

console.log(regression.linear(data).r2);
