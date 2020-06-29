/*function collectOddValues(arr) {

    let results = [];
    function helper(helperArr) {
        if (helperArr.length === 0) {
            return;
        }

        if (helperArr[0] % 2 !== 0) {
            results.push(helperArr[0]);   
        }
        helper(helperArr.slice(1));
    }
    helper(arr);

    return results
}

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(collectOddValues(arr));

// my training 
function collectOddValues(arr){
	const odds = [];
	function helper(helperArr){
		if(arr.length === 0){
			return; 
		}
		if (arr[0] % 2 !== 0) {
			odds.push(arr[0]);
		}
		helper(arr.splice(0, 1));
	}
	helper(arr);

	return odds;
}*/

function collectOddValuesPureRecursion(arr) {
	var newArr = [];

	// base
	if (arr.length === 0)
		return newArr;

	// pass arr in individual one
	if (arr[0] % 2 != 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValuesPureRecursion(arr.slice(1)));
	return newArr;
}

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(collectOddValuesPureRecursion(arr));


