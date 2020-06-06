function findLongestSubstring(str){

    let left = 0;
    let right = 1;
    let done = false;
    let longStr = Object.keys(str).length;
    
    let obj = {};
    
    // in case some char are repeating at the beginning
    while (done != true) {
        
        if (str[left] == str[right]) {
            left++;
            right++;
        } else {
            done = true;
        }
    
    }
    
    let cont = 1;
    
    obj[str[left]] = 1;
    
    
    let run = false;
    while (run != true) {
        // parse char into obj
        if (!obj[str[right]]) {
            console.log('right');    
            console.log(right);
            obj[str[right]] = 1;
            right++;
            cont++;
            // console.log(cont);
        // if (obj[str[right]]) decale right until match (left ref is the str obj) && add char to the obj[char] = 1;
        } else if (str[left] != str[right]) {
            
            let i = left;
            let done = false;
            console.log('tamere la pute')
            console.log(str[right]);
    
            while (done == false) {
                if (str[left] === str[right]) {
                    console.log('ds while 1');
                    obj[str[left]] = 0;
                    left++;
                    cont--;
                    if (left === right)
                        right++;
                    done = true;
                } else {
                    console.log('ds while 2');
                    obj[str[left]] = 0;
                    left++;
                    cont--;
                }
            }
           
        } else if (str[left] === str[right]) {
    
            console.log('lamerde');
            console.log(str[left]);
            console.log(str[right]);
            
            console.log('second -');
            obj[str[left]] = 0;
            cont--;
            left++;
        }

        if (longStr === right) {
            run = true;
        }
    
    }
    
    return cont;
    
    }
    
    // console.log(findLongestSubstring('ttttttestttt'));
    // console.log(findLongestSubstring('greenav'));
    console.log(findLongestSubstring('cesttamanger'));