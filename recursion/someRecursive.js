// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

const isOdd = val => val[0] % 2 !== 0;


function someRecursive(arr, isOdd){
  // add whatever parameters you deem necessary - good luck!

	if (arr.length === 0) return false;

	if(isOdd(arr)) return true
	
   	return someRecursive(isOdd(arr.splice(0, 1)), isOdd);
}

console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)) // false

