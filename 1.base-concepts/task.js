"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let sqrtOne;
  let sqrtTwo;
  let D = b**2-4*a*c;
  
  if (D === 0) {
    sqrtOne = -b/(2*a);
    arr.push(sqrtOne);
    console.log(arr);
  } 
  else if (D > 0){
    sqrtOne = (-b + Math.sqrt(D) )/(2*a);
    sqrtTwo = (-b - Math.sqrt(D) )/(2*a);
    arr.push(sqrtOne);
    arr.push(sqrtTwo);
    console.log("Первый корень =" + arr[0] + ";" + "Второй корень =" + arr[1]);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let monthPayment;
  let totalAmount;

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    console.log("Один из параметров содержит неверное значение");
    return false;
  }
  percent = (percent/100)/12;
  bodyCredit = amount - contribution;
  monthPayment = bodyCredit * (percent + (percent/((Math.pow((1 + percent), countMonths)) - 1)));
  totalAmount = parseFloat((monthPayment * countMonths).toFixed(2));

  return totalAmount;
}
