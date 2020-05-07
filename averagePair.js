function averagePair(arr, b){
   // multiplie nbr par 2
   const somme =  b * 2;
   let str = 0;
   let end = somme; 
   
   // sort arr
   arr.sort(function(a, b) {
    return a - b;
    })

   // cut number sup a somme(via loop)< length
   for(let i = 0; i < somme; i ++) {

    let fnd = somme - arr[str]
    
    if( fnd > arr[end] ) {
        str += 1;
    } 

    if( fnd < arr[end]) {
        str -= 1;
    }

    if( fnd === arr[end]) {
        return true;
    }

   }

   return false

}

cconsole.log(averagePair([2,5,7,9,11], 8))