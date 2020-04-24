// ma solution, pas mal !!!
function countUniqueValues(arr) {
    var cursRf = 0;
    var values = {};
    values[0] = arr[0];
    var mem = 0;

    for (i = 0; i <= arr.length; i++) {
        if (values[cursRf] !== arr[i]) {
           values[cursRf] = arr[i]
           mem ++;
        }
    }
    return mem;
}
var test = [];
console.log(countUniqueValues(test));

// correction du prof
function countUniqueValues(arr) {
   if (arr.length === 0) return 0;
   var i = 0;

   for (j = 0; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
        arr[i] = arr[j]
        i ++;
    }
   }
    return i + 1;
}
var test = [];
console.log(countUniqueValues(test));
