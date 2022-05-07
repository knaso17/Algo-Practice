//Problem
/*
Given two non-empty arrays of integers, write a function that determines if the
second array is a sub-array that is in the same order, but not necessarily
adjacent.
*/

//My Solution (O(n))
/*
function isSubArray(array, sequence) {
  let seqPoint = 0;
  let arrPoint = 0;

  while(seqPoint < sequence.length && arrPoint < array.length){
    if(sequence[seqPoint] === array[arrPoint]) seqPoint++;
    arrPoint++;
  }
  return seqPoint === sequence.length;
} */

//Alternate Solution (O(n))
//Loop through the entire array, checking against sequence. If you get a match move pointer, until you reach the end of one array,
function isSubArray(array, sequence) {
  let seqPoint = 0;
  for(const value of array){
    if (seqPoint === sequence.length) break;
    if (sequence[seqPoint] === value) seqPoint++;
  }
  return seqPoint === sequence.length;
}

module.exports = isSubArray;
