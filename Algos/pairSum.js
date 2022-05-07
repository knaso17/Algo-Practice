function pairSum(array, targetSum) {

	for (let i = 0; i < array.length; i++){
		for(let y = 0; y < array.length; y++){
			if( i !== y){
				if(array[i]+array[y] === targetSum){
				return [array[i], array[y]]
			 }
			}
		}
	}
	return [];
}

module.exports = pairSum;
