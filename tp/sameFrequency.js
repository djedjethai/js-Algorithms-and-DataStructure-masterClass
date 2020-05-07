// ma solution
function sameFrequency(num1, num2){
  let obj = {};

  num1 = num1.toString();
  num2 = num2.toString();

  var num1Lg = Object.keys(num1).length;
  var num2Lg = Object.keys(num2).length;

  if (num1Lg !== num2Lg) {
      return false;
  }
  
  for (let i = 0; i < num1Lg; i++) {

      if (obj[num1[i]]) {
          obj[num1[i]] += 1
      } else {
          obj[num1[i]] = 1
      }
  }
  
  for (let y = 0; y < num2Lg; y++) {

      // check if each num is present in num1
      if (obj[num2[y]] > 1) {
        obj[num2[y]] -= 1;
      } else if (obj[num2[y]] === 1) {
        delete obj[num2[y]]
      }
  }

  // if num1 == 0 return true
  if (Object.keys(obj).length > 0) {
    return false;
  } else {
    return true;
  }
}
console.log(sameFrequency(34555, 35545));


// solution du prof
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}
