function amiClever(arr, num) {
    // 
    console.log('fg')
    let maxLeng = arr.length;
 

    let numDiv = maxLeng / 2
    console.log(numDiv);

   // a mettre ds loop
    for(let i = 0; i < maxLeng; i ++) // pb ici et dans la loop
    {
        if (arr[numDiv] < num) {
            numDiv = (maxLeng - numDiv) / 2;  
        }

        if (arr[numDiv] > num) {
            numDiv = numDiv / 2
        }

        if (arr[numDiv] === num) {
            return true
        }
    }

    // af arr
    return false;
}

arr = [10,19,3,20,20,20,5,10,10,10];

console.log(amiClever(arr, 3))
