// const arr = [-2,3,1,-32,45,0,-4, 7]
const arr = [-2,3,1,-32,45,0,-4, 7, 5, 43,-8,100,-23,-67, 78,90]

function swap(a){
	if(a[0] > a[1]){
		let c
		c = a[0]
		a[0] = a[1]
		a[1] = c
	}
	
	return a
}


function mergeSort(arr){
	const refArrLgt = arr.length
	let final = []

	function divise(arr){
		let newLgt = (arr.length -1)/2
		let first = arr.slice(0, newLgt+1)
		let second = arr.slice(newLgt +1)
	
		if(first.length <=2 && second.length <=2 ){
	
			swap(first)
			swap(second)

			final.push(mergeArray(first, second))	
		} else {
			divise(first)
			divise(second)
		}

		return final
	}
	// return divise(arr)
	arrToConcat = divise(arr)
	console.log("end")
	
	let finalfinal = []
	function concatArr(arrToConcat){
		let newLgt = (arrToConcat.length -1)/2
		let first = arr.slice(0, newLgt+1)
		let second = arr.slice(newLgt +1)

		console.log('start arrayToConcat')	
		if(arrToConcat.length > 2){
			let tempLgt = Math.floor(arrToConcat.length / 2)
			// create new arr with new lgt
			console.log("first concat origin: ", arrToConcat)
			// console.log("first concat: ", xxx)

			let interFirstArr = arrToConcat.slice(0, tempLgt)
			let interSecondArr = arrToConcat.slice(tempLgt, arrToConcat.length)
			
			if(interFirstArr.length > 2 && interSecondArr.length > 2){
				concatArr(interFirstArr)
				concatArr(interSecondArr)
			} else if(interFirstArr.length === 2 && interSecondArr.length === 2){	
				finalfinal = finalfinal.concat(mergeArray(interFirstArr[0], interFirstArr[1]))
				finalfinal = finalfinal.concat(mergeArray(interSecondArr[0], interSecondArr[1]))
				return finalfinal
			} else if(interFirstArr.length === 1 && interSecondArr.length === 1){
				finalfinal = mergeArray(finalfinal, interFirstArr[0])
				finalfinal = mergeArray(finalfinal, interSecondArr[0])
				return finalfinal
			} else {
				return finalfinal
			}

		} else {
			console.log("arrayToConcat final: ", arrToConcat)
			return finalfinal
		}
	}
	return concatArr(arrToConcat)
}

console.log("out from func: ", mergeSort(arr))


function mergeArray(arr1, arr2){
	let i = 0
	let j = 0
	let res = []

	while(i < arr1.length && j < arr2.length){
		if(arr1[i] < arr2[j]){
			res.push(arr1[i])
			i++
		} else {
			res.push(arr2[j])
			j++
		}
	}
	while(i < arr1.length){
		res.push(arr1[i])
		i++
	}
	while(j < arr2.length){
		res.push(arr2[j])
		j++
	}
	
	return res
}

