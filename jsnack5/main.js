/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const arrayEmpty = [];

for (let i = 0; i < 6; i++) {
    const userRequest = Number(prompt("Inserisci un numero!"));

    if(userRequest % 2 === 1) {
        arrayEmpty.push(userRequest);
        console.log(arrayEmpty);
    }
}