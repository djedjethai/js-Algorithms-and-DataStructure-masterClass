function areThereDuplicates() {
    var obj = {};
    //....obj[0] = arguments[0
    //add 1st arg ds obj


    // check if arg present dans array
    for (let i; i < arguments.length; i++) {
        
        console.log(typeof(obj[arguments[i]]));

        if (typeof(obj[arguments[i]]) === 'undefined') {
            obj[arguments[i]] = 1
        } else if (obj[arguments[i]] >= 1) {
            return true
        }
    }

    return false


    // if not add/ if yes return false


    //when all arg are passed return true

}

console.log(areThereDuplicates(2,3,4,4,6,7))