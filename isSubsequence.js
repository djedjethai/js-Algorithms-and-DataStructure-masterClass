function isSubsequence(strRef, strParse) {
  
    // iteration strRef attribut key=letter, value=nbre in following the order
    let objRef = {};
    let conter = 0;
    for (let key in strRef) {
        objRef[strRef[key]] = conter;
        conter ++  
    }
    
    // iteration strParse but increase count only if value match strRef value
    let objParse = {}
    let cont = 0;
    for (let key1 in strParse) {
        
        objParse[strParse[key1]] = cont;
        // <= as some letters could repeat
        if ( objParse[strParse[key1]] <= objRef[strParse[key1]] ) {
            // only if value of each string match -> delete the objRef element
            objParse[strParse[key1]] == objRef[strParse[key1]] 
                ? (delete objRef[strParse[key1]],  cont ++)
                : cont ++ ;
        }
    
        if (Object.keys(objRef).length === 0) {
            return true;
        } 
    }
    return false;
}

console.log(isSubsequence('hello', 'world helulo'));