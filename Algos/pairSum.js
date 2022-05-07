//Problem
/*
Write a function that takes in a non-empty array of integers and an integer
representing a target sum. If any two numbers add up to the target, the function
should return them in an array. The order does not matter. You cannot use the
same number twice. Each array will have one pair at most.
*/

//My Brute Force Solution (O(n^2))
/*
function pairSum(array, targetSum) {
  for (let i = 0; i < array.length; i++){
    for(let y = 0; y < array.length; y++){
      if( i !== y){
        if(array[i] + array[y] === targetSum){
          return [array[i], array[y]]
        }
      }
    }
  }
  return [];
} */

//More efficient solution (O(n^2))
/*
function pairSum(array, targetSum){
  for (let i = 0; i < array.length -1; i++){  //The last number will already have been checked against all others
    for (let j = i + 1; j < array.length; j++){ //Don't need beginning nums again (also prevents dupes)
      if(array[i]+array[j] === targetSum){
        return [array[i], array[j]];
      }
    }
  }

  return [];
} */

//Even more efficient solution (O(n))
//loop through once, keeping track of all the numbers you've already seen. As you loop check current num against past nums to check for target sum. If match return, if not add to object and move on.
/*
function pairSum(array, targetSum){
  const nums = {};
  for (const num of array){
    const potentialMatch = targetSum - num;
    if (nums[potentialMatch]){
      return [potentialMatch, num];
    }else{
      nums[num] = true;
    }
  }
  return [];
} */

//Best Solution (O(nlog(n)))
function pairSum(array, targetSum){
  let arr = array.sort((a,b) => a - b);
  let left = 0;
  let right = arr.length;
  while (left < right){
    if(arr[left] + arr[right] === targetSum){
      return [arr[left], arr[right]]
    }else if(arr[left] + arr[right] < targetSum){
      left++;
    }else{
      right--;
    }
  }
  return [];
}

module.exports = pairSum;
