console.log("hello");
/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/

// Creo 10 oggetti che rappresentano una zucchina.
const zucchine = [
    {
        varieta: 'varietà1',
        peso : 1,
        lunghezza: 10
    },
    {
        varieta: 'varietà2',
        peso : 2,
        lunghezza: 10
    },
    {
        varieta: 'varietà3',
        peso : 3,
        lunghezza: 10
    },
    {
        varieta: 'varietà4',
        peso : 4,
        lunghezza: 10
    },
    {
        varieta: 'varietà5',
        peso : 5,
        lunghezza: 10
    },
    {
        varieta: 'varietà6',
        peso : 6,
        lunghezza: 15
    },
    {
        varieta: 'varietà7',
        peso : 7,
        lunghezza: 15
    },
    {
        varieta: 'varietà8',
        peso : 8,
        lunghezza: 15
    },
    {
        varieta: 'varietà9',
        peso : 9,
        lunghezza: 15
    },
    {
        varieta: 'varietà10',
        peso : 10,
        lunghezza: 15
    },
]


//Dividi in due array separati le zucchine che misurano meno o più di 15cm.

const shortZucchine = []
const longZucchine = []

zucchine.forEach((element)=>{
    console.log(element.lunghezza);
    if (element.lunghezza <= 14) {
        shortZucchine.push(element)
    } else{
        longZucchine.push(element)
    }
})

console.log(shortZucchine);
console.log(longZucchine);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let sumShort = 0
shortZucchine.forEach((element) =>{
    sumShort += element.peso
})

console.log(sumShort);

let sumLong = 0
longZucchine.forEach((element) =>{
    sumLong += element.peso
})

console.log(sumLong);