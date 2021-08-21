const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj){

	const arr  = []

	for (const k in obj){
		if(typeof obj[k] === 'string'){
			arr.push(obj[k])
		}
		
		if(typeof obj[k] === 'object'){
			return arr.concat(collectStrings(obj[k]))
		}
	}

	return arr
} 

console.log(collectStrings(obj))


// ["foo", "bar", "baz"])


// function capitalizedWords (arr) {
// 	const res = []
// 
// 	if(arr.length === 1) return arr[0].toUpperCase()
// 
// 	res.push(arr.shift().toUpperCase())
// 
// 	return res.concat(capitalizedWords(arr))
// }
// 
// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
