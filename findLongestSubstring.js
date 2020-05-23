function findLongestSubstring(str){

let left = 0;
let right = 1;
let done = false;

// obj stock val 
let obj = {};
// obj[left] = str[left];

// cout max nbr char 
let cont = 0;

// if 1 char => end
while (done != true) {
    
    if (str[left] == str[right]) {
        left++;
        right++;
    } else {
        done = true;
    }

}

done = false;
obj[0] = str[left];
left = 0;

while (done != true) {

    if (obj[left] != str[right]) {
        right++;
        cont++
    } 
    // !!! in case right is the same......
    else if (obj[left] === str[right]) {
        left++;
        right++;
    }

}





return left;

// if val presente del val presente and move crsor left to right


// curs right carry on


// curs right reach last char => end

}

console.log(findLongestSubstring('ttttttest'));