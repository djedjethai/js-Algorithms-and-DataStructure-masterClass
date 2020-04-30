function sameFrequency(num1, num2){
    let obj = {};
  
    num1 = num1.toString()
    num2 = num2.toString()
    
    console.log(Object.keys(num1))
  
    /*if (Object.keys(num1) !== Object.keys(num2)) {
        return false;
    }*/
    
    for (let i = 0; i < Object.keys(num1).length; i++) {
        
        if (obj[num1[i]] === 1) {
            obj[num1[i]] += 1
        } else {
            obj[num1[i]] = 1
        }
    }
    
    console.log(obj)
    
    /*for (let y = 0; i < Object.keys(num2); y++) {
        if (obj[num1[y]]) === 
    }*/
    
  }
  
  console.log(sameFrequency(34555, 876));
  