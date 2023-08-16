function getFactorial(number){
  let result = number;
  for(let i = number-1; i > 0; i--){
    result *= i;
  }
  return result;
}

exports.Factorial = getFactorial;