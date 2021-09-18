const arrA = [-7, -5, 2,3,45,67]
const arrB = [-20,-10,-2,0, 89,1005,1006, 2000]


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


console.log(mergeArray(arrB, arrA))

// function pushRest(diff, arr, fin){
// 	for(let y=diff; y >0; y--){
// 		fin.push(arr[arr.length -y])
// 	}
// 	return fin
// }
// 
// function mergeArray(a1, a2){
// 	let run = true
// 	let fo = 0
// 	let f = 0
// 	
// 	let so = 0
// 	let s = 0
// 		
// 	const fin = []
// 	while(run) {
// 		fo = f
// 		so = s
// 		
// 		if(a1[fo] < a2[so]){
// 			fin.push(a1[fo])
// 			f++
// 		} 
// 		if(a1[fo] > a2[so] ){
// 			fin.push(a2[so])
// 			s++
// 		} 
// 		if(a1[fo] === a2[so] ){
// 			fin.push(a2[so])
// 			f++
// 			s++
// 		}
// 		
// 
// 		if(fo === a1.length && a1.length !== a2.length){
// 			if(a2[so -1] < a2[a2.length -1]) pushRest(a2.length -so, a2, fin)
// 			return fin
// 		} 
// 
// 		if(so === a2.length && a1.length !== a2.length){
// 			if(a1[fo -1] < a1[a1.length -1]) pushRest(a1.length -fo, a1, fin)
// 			return fin
// 		}
// 
// 		if(fo === a1.length && a1.length === a2.length){
// 			if(so < fo){
// 				pushRest(fo-so, a2, fin)
// 				return fin
// 			} else {
// 				fin.push(a2[a2.length -1])
// 				return fin
// 			}
// 		}
// 
// 		if(so === a2.length && a1.length === a2.length) {
// 			if(so > fo) {
// 				pushRest(so-fo, a1, fin)
// 				return fin
// 			} else {
// 				fin.push(a1[a1.length -1])
// 				return fin
// 			}
// 		}
// 	}
// }



