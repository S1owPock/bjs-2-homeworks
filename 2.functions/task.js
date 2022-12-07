function getArrayParams(...arr) {
  let min= arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = (sum/arr.length).toFixed(2);
  let num = Number(avg);

  for (let i = 0; i < arr.length; i++){
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
