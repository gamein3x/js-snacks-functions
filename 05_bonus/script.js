/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome 
fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let time = -1;

// Dichiara la funzione qui.
function saluter() {
    let messaggio = "";
    if (time >= 0 && time < 6) {
        messaggio = `Dovresti dormire, ${name}`;
    } else if (time >= 6 && time < 13) {
        messaggio = `Buongiorno ${name}`;
    } else if (time >= 13 && time < 17) {
        messaggio = `Buon pomeriggio ${name}`;
    } else if (time >= 17 && time < 24) {
        messaggio = `Buonasera ${name}`;
    }
    return messaggio;
}

// Invoca la funzione qui e stampa il risultato in console
while (time<23) {
    time++;
    console.log(`Sono le ${time}. ${saluter()}`);
}


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.