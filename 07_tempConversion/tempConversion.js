const ftoc = function(temp) {
 let goodUnits = (temp-32)*0.5556;
 goodUnits = Math.round(goodUnits *10)/10;
 return goodUnits;
};

const ctof = function(temp) {
let badUnits = (temp*1.8)+32;
badUnits = Math.round(badUnits*10)/10;
return badUnits;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
