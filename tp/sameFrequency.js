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
    console.log(Object.keys(obj).length);
    return false;
  } else {
    return true;
  }
}

console.log(sameFrequency(34555, 35545));

