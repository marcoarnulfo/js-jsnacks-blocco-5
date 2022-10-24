console.log("hello");
/*

Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)

*/


function InvertiStringa(string) {
    return string.split('').reverse().join('')
}

const test = InvertiStringa('Ciao')
console.log(test);
