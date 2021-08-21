const arr = [1,2,3,4,2,3,54,6,67,8,8,9,7,6,65,4,4,7,6]


function linearSearch(arr, ref){
	let ct = 0
	for(const dt of arr){
		if(dt === ref){
			return ct
		}
		ct++
	}
	return -1
}

console.log(linearSearch(arr, 3))
