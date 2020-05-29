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
    let i = left;
    obj[str[left]] = 1;
    
    console.log(Object.keys(str).length - (left + 1)); // ?????
    
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
        } else {
    
        // match parse left of the left of the str then obj[left] = 0 && decale left de 1 
            for (let i; i <= left; i++) {
                console.log('one');    
                obj[str[i]] = 0;
                cont--;
            }
            i = left;
            left++;
        }
    
    }
    
    return cont;
    
    }
    
    // console.log(findLongestSubstring('ttttttestttt'));
    console.log(findLongestSubstring('greenav'));