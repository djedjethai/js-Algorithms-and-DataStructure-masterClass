// function sumRange(num) {
//     if (num === 1) {
//         console.log('end');
//         return 1;
//     }
//     console.log(num);
//     return num + sumRange(--num)
// }

// refactored function
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
console.log(sumRange(4));

    // final return == 10
    // 4 + sumRange(3) => 4+6
    //         3 + sumRange(2) => 3+3
    //                 2 + sumRange(1) => 2+1 
    //                         return 1