console.log("hello");

/*

Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”

*/



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let newArray = []

function myFunction(yourArray, min, max) {
    yourArray.forEach((index) => {
        //console.log(index);
        if (index > min && index < max) {
            newArray.push(index)
        }
    })
}

myFunction(arr, 7, 10)


console.log(newArray);

/*
arr.forEach((index) => {
    //console.log(index);
    if (index > 3 && index < 7) {
        console.log(index);
    }
});
*/


