// const arr = [50, 6]
const arr = [1,43,-3,23,2, 234, -10, -5]


function pivot(arr, start=0, end=arr.length+1)  {
	let swapIndex = start
	let pivot = arr[start]

	function swap(arr, left, right){
		let temp
		temp = arr[left]
		arr[left] = arr[right]
		arr[right] = temp
	}

	// in this case ther is more than 3 elements
	for(let i = start+1; i <arr.length; i++){
		if(pivot > arr[i]){
			swapIndex++
			swap(arr, swapIndex, i)
		}
	}
	swap(arr, start, swapIndex)
	console.log('final arr: ', arr)
	return swapIndex
}

console.log('final: ', pivot(arr))

