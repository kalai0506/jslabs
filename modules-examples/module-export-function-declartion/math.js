function add(num1, num2){
  console.log('Inside Addition');
  return num1+num2;
};

subtract = function (num1, num2){
  console.log('Inside subtract');
  return num1-num2;
};

function multiply(num1, num2){
  console.log('Inside multiply');
  return num1*num2;
};

module.exports={add,subtract,multiply};
