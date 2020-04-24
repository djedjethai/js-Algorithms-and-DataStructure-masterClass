function slidingWindowPattern(arr, num) {
    // init sum
    // parse arr->make sum
    // compare sum, if bigger update sum
    // decal widows
    // end parse return sum
    let sum = 0;
    let rightCurs = num;
    
    let y = 0;
    while(y < num) {
        sum  += arr[y]
        y += 1;
    }
   let bigSum = sum;
   
    for(let i = 0; i < 1; i ++) {

        sum -= arr[i];
        sum += arr[num + i];

        if(sum > bigSum) {   
            bigSum = sum;
        }
    }

    return bigSum;
}

arr = [10,9,9,4,3,4,5,10,10,10]

console.log(slidingWindowPattern(arr, 3))