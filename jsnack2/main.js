/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const wordA = prompt("Inserisci la prima parola!");
const wordB = prompt("Inserisci la seconda parola!");


if (wordA.length > wordB.length) {
    console.log(wordB, wordA);
} else if{
    console.log(wordA, wordB);
} else {
    console.log("le parole hanno la stessa lunghezza")
}