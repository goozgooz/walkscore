'use strict';

module.exports = (data) => {
  let dataKeys = data.split(',,,,,,,,,,,,,,,,,,,')[0].split(',');
  let objectModel = {};
  for(let key of dataKeys){
    objectModel[key] = null;
  }
  console.log(objectModel);
};