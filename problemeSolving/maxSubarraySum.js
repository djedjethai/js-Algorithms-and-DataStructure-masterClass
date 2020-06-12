function maxSubarraySum(arr, num){
    let start = 0;
    let end = num -1;
    let sumMax = 0;
  
    if (num > arr.length)
      return null;
  
    for (let i=0; i < num; i++) 
        sumMax += arr[i];
    
  
    let newSum = sumMax;
    for (let key of arr) {
      
      if (end <= arr.length ) {
          end++; 
          newSum = (newSum - arr[start]) + arr[end];
          start++;
      }
        
      if (newSum > sumMax) 
          sumMax = newSum;
      
    }
    return sumMax; 
  
  }
  
  console.log(maxSubarraySum([100, -20, 440, -5, 45, 65], 6));
  
  // solution du prof
  function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}