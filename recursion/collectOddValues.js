function collectOddValues(arr) {

    let results = [];
    function helper(helperArr) {
        if (helperArr.length === 0) {
            return;
        }

        if (helperArr[0] % 2 !== 0) {
            results.push(helperArr[0]);   
        }
        helper(helperArr.slice(1));
    }
    helper(arr);

    return results
}

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(collectOddValues(arr));