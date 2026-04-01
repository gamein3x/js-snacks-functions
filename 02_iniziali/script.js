/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni
 parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetterExtractor(array) {
    let newArray = [];
    for (i=0; i<array.length; i++) {
        let nameCurrent = names[i];
        let firstLetter = nameCurrent[0];
        newArray.push(firstLetter);
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetterExtractor(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]