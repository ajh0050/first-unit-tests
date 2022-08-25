// functions.js
function addTwoNumbers(num1,num2) {
  return num1 + num2;
};

function sayHello(name) {
  var result =null ;
if (name === 'Will'){
  result = `No more testing Will!`
} else {
result = `Hi there ${name}!`
};
return result
};

function buildCar(color,type){
var car = {};
car.color = color;
car.type = type;
return car;
};

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}
