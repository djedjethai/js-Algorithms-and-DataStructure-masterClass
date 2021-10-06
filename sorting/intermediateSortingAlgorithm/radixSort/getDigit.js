
// solution du prof
function getDigitProf(num, i){
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCountProf(num) {
	if(num === 0) return 1
	return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigitProf(arr){
	let ref = 0
	for(let i = 0; i < arr.length; i++){
		ref = Math.max(ref, digitCount(arr[i]))
	}
	return ref
}

// my solutions, it works
function getDigit(num, i){
	let m = 10
	for(let y = 0; y < i; y++) m *= 10
	s = '' + (num/m)
	
	return parseInt(s.split('.')[1][0], 10)
}
// console.log(getDigit(-12345, 2))

function digitCount(num){
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

function mostDigit(arr){
	let ref = 0
	for(let i = 0; i < arr.length; i++){
		if(ref < digitCount(arr[i])){
			ref = digitCount(arr[i])
		}
	}

	return ref
}
console.log(mostDigit([-564321, 123,23,1,45678]))
