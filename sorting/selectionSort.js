function swap(arr, a,b){
	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp	
}

function selectionSort(arr){
	for(let i=0; i < arr.length; i++){
		let smallest = i
		for(let j= i; j < arr.length; j++ ){
			if(arr[j] < arr[smallest]) {
				smallest = j
			}
		}
		swap(arr, i, smallest)
	}
	
	return arr
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }


const arr = [7, 2, 12, 5]

console.log(selectionSort(arr))
