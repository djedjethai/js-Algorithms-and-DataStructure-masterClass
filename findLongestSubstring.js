function findLongestSubstring(str){

    let left = 0;
    let right = 1;
    let done = false;
    
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
    
    console.log('left start');
    console.log(left);
    console.log('right start');
    console.log(right);
    
    // loop, a affiner................
    for (let y = 0; y < Object.keys(str).length - (left + 1); y++) {
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
            
            let i = left + 1;
            let done = false;
            console.log('tamere la pute')
            console.log(str[right]);
    
            while (done = false) {
                if (str[i] === str[right]) {
                    for (left; left = i; left++) {
                        console.log('first -');
                        obj[str[left]] = 0;
                        cont--;
                    }
                    done = true;
                } else {
                    i++;
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
    
    }
    
    return cont;
    
    }
    
    // console.log(findLongestSubstring('ttttttestttt'));
    // console.log(findLongestSubstring('greenav'));
    console.log(findLongestSubstring('cesttamanger'));