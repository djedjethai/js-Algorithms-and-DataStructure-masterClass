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


sumRange(4);
