function minSubArrayLen(arr, num){
    
    const sortedArr = arr.sort((a, b) => a - b);
    let len = arr.length;
    len -= 1

    if (sortedArr[len] >= num)
      return 1;
    else 
    { 
      let tot = 0;
      let cont = 0;
       
      while (tot < num && sortedArr[len] > 0) {
        tot += sortedArr[len]; 
        cont++
        len--
      }

      const result = (tot < num) ? 0 : cont;
      return result;
    }
  }
  
  console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
  