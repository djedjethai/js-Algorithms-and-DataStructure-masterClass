// ne fonctionne pas.... ECHEC !!!!!!
// function findLongestSubstring(str){

//     let left = 0;
//     let right = 1;
//     let done = false;
//     let longStr = Object.keys(str).length;
//     let obj = {};
//     // in case some char are repeating at the beginning
//     while (done != true) {
//         if (str[left] == str[right]) {
//             left++;
//             right++;
//         } else {
//             done = true;
//         }
//     }
    
//     let cont = 1;
//     let maxCont = cont;
//     obj[str[left]] = 1;
    
//     let run = false;
//     while (run != true) {
//         // parse char into obj
//         if (!obj[str[right]]) {
//             obj[str[right]] = 1;
//             right++;
//             cont++;
//             if (maxCont < cont) {
//                 maxCont = cont;
//             };

//         } else if (obj[str[right]] && str[left] != str[right]) {
//             let done = false;
//             while (done === false) {
//                 if (str[left] !== str[right]) {
//                     obj[str[left]] = 0;
//                     left++;
//                     cont--;
//                 } else {
//                     done = true;
//                 };
//             };
           
//         } else if (obj[str[right]] && str[left] === str[right]) {
//             let done = false;
//             console.log('test');
//             while (done === false) {
//                 if (str[left] === str[right]) {
//                     obj[str[left]] = 0;
//                     left++;
//                     cont--;
//                     if (left === right) {
//                         right++;
//                         cont++;
//                         done = true;
//                     };
//                     if (maxCont < cont) {
//                         maxCont = cont;
//                     };
//                 } else {
//                     done = true;
//                 }
//             }
//         }

//         if (longStr === right) {
//             run = true;
//         }
//     }
    
//     return maxCont;
    
//     }
    
//     console.log(findLongestSubstring('ttttttt'));
//     // console.log(findLongestSubstring('greenav'));
//     // console.log(findLongestSubstring('angeri'));

// solution du prof.....
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

  console.log(findLongestSubstring('jesuiscoun'));