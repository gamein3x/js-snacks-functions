/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocalsCounter(wordHere) {
    const vocalString = "aeiouAEIOUàèìòù"
    let vocals = 0;
    for (i=0; i<wordHere.length; i++) {
        if (vocalString.includes(wordHere[i])) { 
            vocals = vocals + 1;
        }
    }
    return vocals;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vocalsCounter(word));
console.log(`Ci sono ${vocalsCounter(word)} vocali`);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)