/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

"use strict"

//chiedi all'utente il suo nome e cognome
const nameSurname = ["Mario Bianchi", "Luca Rossi", "Marco Verdi"];

const userName = prompt("Scrivi il tuo nome e cognome");

for (let i = 0; i < nameSurname.length; i++){
    if (userName === nameSurname[i]){
        alert("sei invitato");
    } else {
        alert("non sei invitato");
    }
}
console.log(userName, alert)