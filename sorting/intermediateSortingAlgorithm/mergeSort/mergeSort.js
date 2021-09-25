// const arr = [-2,3,1,-32,45,0,-4, 7]
// const arr = [-2,3,1,-32,45,0,-4, 7, 5, 43,-8,100,-23,-67, 78,90]
// const arr = [-7,-2,3,1,-32,45,0,-4, 7, 5, 43,-8,100,-23,-67, 78,90]
const arr = [233,-7,-2,-4, 43,-8,100,-23,-67, 78,90]
// const arr = [3,1,-4]
// const arr = [3,1]
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

function mergeSort(arr){
	if(arr.length <= 1) return arr
	let mid = Math.floor(arr.length/2)
	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid))
	return mergeArray(left, right)
}


console.log(mergeSort(arr))


