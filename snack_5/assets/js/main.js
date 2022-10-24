console.log("hello");

/*

Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”

*/



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function myFunction(yourArray, min, max) {
    newArray = []
    yourArray.forEach((index) => {
        if (index > min && index < max) {
            newArray.push(index)
        }
    }) 
return newArray
}

myFunction(arr, 3, 8)
console.log(newArray);



