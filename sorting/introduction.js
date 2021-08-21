function sort(arr){
	const fin = []
	let ref = 0
	let refi

	function rec(arr){
		if (arr.length === 1) {
			fin.push(arr[0])
			return
		}

		for(let i=0; i < arr.length; i++){
			if(i === 0){
				refi = i
				ref = arr[i]
			}
			
			if(arr[i] < ref) {
				ref = arr[i]
				refi = i
			} 
		}

		fin.push(ref)
		arr.splice(refi, 1)

		rec(arr)
	}	

	rec(arr)
	
	return fin
}

const arr = [12,  32, 1, 34, 56, 45]
// const arr = [12, 32, 6]

console.log(sort(arr))
