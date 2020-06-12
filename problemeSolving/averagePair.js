function averagePair(arr, b){
    // multiplie nbr par 2
    const somme =  b * 2;
    
    // cut too big numbers
    var str = 0;
    var end = arr.findIndex(elm => elm > somme )
    if (end === -1) {
        end = (arr.length) - 1;
    }
 
    // sort arr
    arr.sort(function(a, b) {
     return a - b;
     })
 
    // move the cursor 
    for(let i = 0; i < end; i ++) {
 
     let fnd = somme - arr[str];
     
     if( fnd > arr[end] ) {
         str += 1;
     } 
 
     if( fnd < arr[end]) {
         end -= 1;
     }
 
     if( fnd === arr[end]) {
         return true;
     }
    }
    return false
 }
 
 console.log(averagePair([2,5,7,10,11, 23, 47], 8))