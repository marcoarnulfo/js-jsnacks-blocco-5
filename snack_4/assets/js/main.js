console.log("hello");

/*

Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const letter = [
    'a',
    'b',
    'c'
]

const number = [
    1,
    2,
    3
]

console.log(letter);
console.log(number);


/*

const newArray = []

for (let index = 0; index < number.length; index++) {
    const element = letter[index];
    const secondEl = number[index];
    console.log(index, "SONO INDEX");
    newArray.push(element)
    newArray.push(secondEl)
}

console.log(newArray);

*/

function arrayUnion(array, firstArray, secondArray, newArray) {
    for (let index = 0; index < array.length; index++) {
        const element = firstArray[index];
        const secondEl = secondArray[index];
        newArray.push(element)
        newArray.push(secondEl)
    }
}

const newArray = []

arrayUnion(number, letter, number, newArray)

console.log(newArray);
