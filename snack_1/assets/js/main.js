console.log("hello");
/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

// creo un array di 10 oggetti

const zucchine = [
    {
        varieta: 'varietà1',
        peso : 1,
        lunghezza: 'lunghezza1'
    },
    {
        varieta: 'varietà2',
        peso : 2,
        lunghezza: 'lunghezza2'
    },
    {
        varieta: 'varietà3',
        peso : 3,
        lunghezza: 'lunghezza3'
    },
    {
        varieta: 'varietà4',
        peso : 4,
        lunghezza: 'lunghezza4'
    },
    {
        varieta: 'varietà5',
        peso : 5,
        lunghezza: 'lunghezza5'
    },
    {
        varieta: 'varietà6',
        peso : 6,
        lunghezza: 'lunghezza6'
    },
    {
        varieta: 'varietà7',
        peso : 7,
        lunghezza: 'lunghezza7'
    },
    {
        varieta: 'varietà8',
        peso : 8,
        lunghezza: 'lunghezza8'
    },
    {
        varieta: 'varietà9',
        peso : 9,
        lunghezza: 'lunghezza9'
    },
    {
        varieta: 'varietà10',
        peso : 10,
        lunghezza: 'lunghezza10'
    },
]

// Calcolo quanto pesano tutte le zucchine.

let sum = 0

zucchine.forEach((element, i) =>{
    console.log(element.peso);
    sum += element.peso
})

console.log(sum);
