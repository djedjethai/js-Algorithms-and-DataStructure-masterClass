
function swap(arr, a,b){
	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp	
}

// optimize version, asa no swap happend, the function stop
// loop teacher's version
function bubbleSort(arr){
	let noSwaps
	
	for(let i = arr.length; i > 0; i--){
		noSwaps = true
		for(let j = 0; j < i - 1; j++){
			if(arr[j] > arr[j + 1]){
				swap(arr, j, j+1)
				noSwaps = false
			}
		}
		if(noSwaps) break
	}
	
	return arr
}

// function bubbleSort(arr){
// 
// 	let last = arr.length
// 	
// 	function loop(arr){
// 
// 		for(let i=0; i < last; i++) {if(arr[i] > arr[i+1]) swap(arr, i, i+1)}
// 
// 		if(last === 0) return arr
// 		
// 		last--
// 		
// 		return loop(arr)
// 	}
// 
// 	return loop(arr)
// }

const arr = [-8, 2, 0, 34, 3, 43, -3, 12, 5, 1]

console.log(bubbleSort(arr))


