var arrai = [ -4, 3, -12, -2, 18, -82, -3, -14, 15];

function multiplePointer(arr) {
    //loop take fisrt elm 
    arr.sort(function(a, b) {
        return a - b;
    })

    console.log(arr);
    let neg = 0
    let pos = arr.length - 1;
    console.log(pos);
    for (var i = 0; i < arr.length; i ++) {
        
        let tot = arr[neg] + arr[pos];
        if (tot < 0) {
            neg += 1
        }
        if (tot > 0) {
            pos -= 1
        }
        if (tot === 0) {
            return true
        }
    }
    return false
}

console.log(multiplePointer(arrai))