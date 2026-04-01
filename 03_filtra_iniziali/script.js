/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo
 le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function firstLetterChecker(array, letter) {
    let newArray = [];
    for (i=0; i<array.length; i++) {
        let nameCurrent = names[i];
        let firstLetter = nameCurrent[0];
        if (firstLetter === letter) {
            newArray.push(nameCurrent);
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetterChecker(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]