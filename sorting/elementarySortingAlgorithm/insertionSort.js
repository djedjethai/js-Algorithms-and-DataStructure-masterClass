// solution du prof
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

const arr = [-4, 7, 12,0, -6, 56, -45, 23]

console.log(insertionSort(arr))

// my solution, works but really not optimized
// function insertionSort(arr){
// 	for(let i=0; i < arr.length; i++){
// 		for(let j = (i===0?i+1:i); j >= 0; j-- ){
// 			if(arr[i] >= 0 ){
// 				if(arr[j] < arr[i]){
// 					if(i === 0){
// 						arr.splice(0, 0, arr[j])
// 						arr.splice(2,1)
// 						break
// 					} 
// 
// 					arr.splice(j + 1, 0, arr[i])
// 					arr.splice(i+1, 1)
// 					break
// 				}
// 			} else {
// 				if(arr[j] > arr[i] && arr[j] >= 0){
// 					if(i === 0){
// 						arr.splice(0, 0, arr[j])
// 						arr.splice(2,1)
// 						break
// 					} 
// 
// 					arr.splice(j + 1, 0, arr[i])
// 					arr.splice(i+1, 1)
// 					break
// 				} else {
// 					arr.splice(0,0, arr[j])
// 					arr.splice(i+1, 1)
// 					break
// 				}
// 			}
// 		}
// 	}
// 	
// 	return arr
// }


