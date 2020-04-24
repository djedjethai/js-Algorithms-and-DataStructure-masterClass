// avec ca je compte le monbre de caractere ds un string. Without the space.
// i like it as it s simple, pas d'array et de bigO O(n)
let arrs = 'jhgf la c est de la balle';

function charCount(strs) {
   let compte = 0
    // return strs.length;
    for (let i=0; i<strs.length; i++) {
        if (strs[i] !== ' ') {
            compte ++
        }  
    }
    return compte;
}
console.log(charCount(arrs)); 

// l'ex n'etatit pas de simplement compter mais de creer un obj indiquant le nombre de chaque caractere dans un string
// prof first essay
let arrs = 'jhgf la c est de la balle';
function charCount(strs) {
   let obj = {}
    for (let i=0; i<strs.length; i++) {
        let char = strs[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }  
    }
    return obj;
}
console.log(charCount(arrs));

// prof revised and final version
let arrs = 'jjjf la c est de la balle';
function charCount(strs) {
   let obj = {};
    for (let char of strs) {
        if (isAlphaNum(char)) {
            obj[char] = ++obj[char] || 1
        }
    }
    return obj;
}

function isAlphaNum(char) {
    let code = char.charCodeAt(0);
    if(!(code > 47 && code <58) && // num (0-9)
        !(code > 64 && code <91) && // upper alpha (A-Z)
        !(code > 96 && code <123)) { // lower alpha (a-z)
        return false;
        }
     return true;
}
console.log(charCount(arrs));