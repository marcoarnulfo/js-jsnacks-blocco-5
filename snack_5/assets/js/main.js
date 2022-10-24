console.log("hello");

/*

Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”

*/

let test = []

function generateArray(min, max, mioArray) {
    for (let index = min; index < max; index++) {
        mioArray.push(index)
    }
}

generateArray(0, 10, test)


console.log(test);



