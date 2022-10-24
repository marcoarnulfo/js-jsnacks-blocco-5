console.log("hello");

/*

Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”

*/

/*

let test = []

function fillArray(min, max, nuovoArray) {
    let nuovoArray = []
    for (let index = min +1; index < max; index++) {
        nuovoArray.push(index)
    }
    return nuovoArray
}

fillArray(4, 10, test)


console.log(test);

*/






let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function fillArray(tuoArray, min, max ) {
    let nuovoArray = tuoArray.map(function(element){
        if (element < min) {
            console.log('minore!!');
        } 
        if (element > max) {
            console.log('maggiore!!');
        }
        return element
    }) 
}

fillArray(arr, 3, 5)

console.log(nuovoArray);



/*

let modifiedArr = arr.map(function(element){
    if (element > 4) {
        console.log('funziono');
    } 
    if (element < 4) {
        console.log('funziono di nuovo');
    }
    return element 
})

console.log(modifiedArr);


*/




