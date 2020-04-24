
// count total repeat letters between 2 strings 
// but do not count repeated letters (ex: party and parka return 3)
function getLetterMatchCount (guessedWord, secretWord) {
    let totLetters = 0;
    let tab = {};

    // fair un tab obj avc secretword
    for(const key in secretWord) {
        tab[secretWord[key]] = 1
    }

    for(let i = 0; i < Object.keys(guessedWord).length; i++) {
        if (tab[guessedWord[i]] === 1 ) {
            totLetters += 1;
            tab[guessedWord[i]] += 1;
        }
    }
    
    // make a bug, strange........
    /*for(const key in guessedWord) {
        console.log(guessedWord[key])
        console.log(tab[guessedWord[key]])

        if (tab[guessedWord[key]] === 1 ) {
            totLetters += 1;
            tab[guessedWord[key]] += 1;
        }
    }*/

    return totLetters;
}

console.log(getLetterMatchCount('dev', 'retvvd'))