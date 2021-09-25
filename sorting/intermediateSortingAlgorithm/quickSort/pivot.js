// const arr = [50, 6]
const arr = [1,43,-3,23,2, 234, -10, -5]


function pivot(arr)  {
	let index = 0 
	let pivot = arr[0]

	function swap(arr, left, right){
		let temp
		temp = arr[left]
		arr[left] = arr[right]
		arr[right] = temp
	}

	// in this case ther is more than 3 elements
	for(let i = 1; i <arr.length; i++){
		if(pivot > arr[i]){
			index++
			swap(arr, index, i)
		}
	}
	swap(arr, 0, index)
	console.log('final arr: ', arr)
	return index
}

console.log('final: ', pivot(arr))

