//Problem
/*
Given two non-empty arrays of integers, write a function that determines if the
second array is a sub-array that is in the same order, but not necessarily
adjacent.
*/

//My Solution (O(n))

function isSubArray(array, sequence) {
	let seqPoint = 0;
	let arrPoint = 0;

	while(seqPoint < sequence.length && arrPoint < array.length){
		if(sequence[seqPoint] === array[arrPoint]) seqPoint++;
			arrPoint++;
	}
	return seqPoint === sequence.length;
}


module.exports = isSubArray;
