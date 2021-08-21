const arr = ['a','b', 'c', 'd','e','f','g','h','i', 'j','k','l','m','n']


function binarySearch(arr, l){

	let left = 0
	let right = arr.length

	let middle = (left + right) / 2 
	
	while(arr[middle] !== l && left <= right){

		middle = (left + right) / 2 

		if(arr[middle] === l) return arr[middle]
		
		if(arr.indexOf(l) < (Math.ceil(middle)))right = (Math.ceil(middle) - 1) 
	

		if(arr.indexOf(l) > (Math.floor(middle)))left = Math.floor(middle) + 1
		
	}

	return -1

}

console.log(binarySearch(arr, 'a'))



