function slidingWindowPattern(arr, num) {
    let sum = 0;
  
    let y = 0
    while( y < num) {
        sum  += arr[y]
        y += 1;
    }
   let bigSum = sum;
   
    for(let i = 0; i < arr.length; i ++) {
        sum -= arr[i];
        sum += arr[num + i];
        if(sum > bigSum) {   
            bigSum = sum;
        }
    }
    return bigSum;
}

arr = [10,19,9,20,20,20,5,10,10,10]

console.log(slidingWindowPattern(arr, 3))

// correction du prof
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
  