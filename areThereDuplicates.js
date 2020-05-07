// ma solution
function areThereDuplicates() {
    var obj = {};
   
    for (let i = 0; i < arguments.length; i++) {
       
        if (typeof(obj[arguments[i]]) === 'undefined') {
            obj[arguments[i]] = 1
        } else if (obj[arguments[i]] >= 1) {
            return true
        }
    }
    return false
}
console.log(areThereDuplicates('a', 'd','g', 'h', 'h'))

// solution du prof (frequency counter)
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

  // solution 2 du prof (multiple pointer)
  function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  // solution 3
  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }