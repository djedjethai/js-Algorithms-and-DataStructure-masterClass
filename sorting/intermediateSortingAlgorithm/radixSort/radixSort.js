// solution du prof
function getDigit(num, i){
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// used in mostDigit(arr)
function digitCount(num) {
	if(num === 0) return 1
	return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigit(arr){
	let ref = 0
	for(let i = 0; i < arr.length; i++){
		ref = Math.max(ref, digitCount(arr[i]))
	}
	return ref
}

arr = ['1223', '3309887','23','344','1', '4']

function radixSort(arr){
	const totalDigit = mostDigit(arr)

	// repeat process n time = larger number
	for(let i = 0; i < totalDigit; i++){
		let bucket = Array.from({length: 10}, () => [])
		for(let y = 0; y < arr.length; y++){ bucket[getDigit(arr[y], i)].push(arr[y]) }
		arr = [].concat(...bucket)
	}

	return arr
}

console.log(radixSort(arr))



// my solutions, it works, BUT NOT WITH BIG NUMBER... JS is sucks on that one...
// function getDigitMe(num, i){
// 	if(num == 0) return 1
// 
// 	let m = 10
// 	for(let y = 0; y < i; y++) m *= 10
// 	s = '' + (parseInt(num,10)/m)
// 	
// 	// DOES NOT WORK FOR BIG NUMBER AS IT WILL RETURN A SCIENTIFIQUE NUMBER
// 	// LIKE 1e-7 INSTEAD OF 0.0000001 and the following split will crash
// 	return parseInt(s.split('.')[1][0], 10)
// }
// console.log(getDigit(-12345, 2))

// use it in mostDigitMe
function digitCountMe(num){
	if(num === 0) return 1

	let ct = 0
	num = Math.abs(num)
	while(num > 0){
		num = Math.floor(num / 10)
		ct ++
	}

	return ct
}
// console.log(digitCountProf(-01))

function mostDigitMe(arr){
	let ref = 0
	for(let i = 0; i < arr.length; i++){
		if(ref < digitCountMe(arr[i])){
			ref = digitCountMe(arr[i])
		}
	}

	return ref
}
// console.log(mostDigit([-564321, 123,23,1,45678]))

function radixSortMe(arr){
	const totalDigit = mostDigitMe(arr)
	let bucket = [[],[],[],[],[],[],[],[],[],[]]

	// repeat process n time = larger number
	for(let i = 0; i < totalDigit; i++){
		for(let y = 0; y < arr.length; y++){
			let numDigit = getDigit(arr[y], i)
			// save in bucket
			bucket[numDigit].push(arr[y])
		}
		arr = []

		// iter arr done concat all buckets
		for(let y = 0; y < bucket.length; y++) { arr = arr.concat(bucket[y]) }
		bucket = [[],[],[],[],[],[],[],[],[],[]]
	}

	return arr
}

console.log(radixSortMe(arr))


