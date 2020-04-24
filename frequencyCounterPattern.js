/*function compteurPattern(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCompteur1 =  {};
    let frequencyCompteur2 =  {};
    for (let val of arr1) {
        frequencyCompteur1[val] = (frequencyCompteur1[val] || 0 ) + 1;
    }

    for (let val of arr2) {
        frequencyCompteur2[val] = (frequencyCompteur2[val] || 0 ) + 1;
    }

    for (let key in frequencyCompteur1) {
        if (!(key ** 2 in frequencyCompteur2) ) {
            return false;
        }
        if (frequencyCompteur2[key ** 2] !== frequencyCompteur1[key]) {
            return false;
        }
    }
    return true;

}
if ('key' in myObj)
And the inverse.

if (!('key' in myObj))
Be careful! The in operator matches all object keys, including those in the object's prototype chain.

Use myObj.hasOwnProperty('key') to check an object's own keys and will only return true if key is available on myObj directly:

myObj.hasOwnProperty('key')
Unless you have a specific reason to use the in operator, using myObj.hasOwnProperty('key') produces the result most code is looking for.

function validAnagram(string1, string2) {
    // an object with the first string1
    let obj1 = {};
    for (let key1 in string1) {
        if (string1[key1] in obj1) {
            obj1[string1[key1]] = obj1[string1[key1]] + 1
        } else {
            obj1[string1[key1]] = 1 
        }  
    }

    let obj2 = {};
    for (let key2 in string2) {
        if (string2[key2] in obj2) {
            obj2[string2[key2]] = obj2[string2[key2]] + 1
        } else {
            obj2[string2[key2]] = 1 
        }  
    }

    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
       return false
    }

    for (let key1 in obj1) {
        if (!(key1 in obj2) ) {
            return false;
        }

        if (obj1[key1] !== obj2[key1]) {
            return false;
        }
    }
    return true

}
console.log(validAnagram('hllidaoy', 'hloliday'));
*/
//CORRECTION

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i ++) {
        let letter = first[i];
        // if letter exist increment otherwise set it at 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1 ;
    }

    for (let i = 0; i < second.length; i ++) {
        let letter = second[i];
        // can not find letter or letter at 0 it can t be an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

