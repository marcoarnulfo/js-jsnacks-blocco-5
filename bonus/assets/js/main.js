console.log("hello");

/*

Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

*/





const persons = [
    {
        name: 'name1',
        lastname: 'lastname1',
        age: 16
    },
    {
        name: 'name2',
        lastname: 'lastname2',
        age: 18
    },
    {
        name: 'name3',
        lastname: 'lastname3',
        age: 16
    },
    {
        name: 'name4',
        lastname: 'lastname4',
        age: 18
    },
]

// SOLUZIONE 1

// Divisione delle persone in due array differenti 
/*
let canDrive = []
let cantDrive = []

persons.forEach((element, index) => {
    if (element.age < 18) {
        persons[index].canDrive = false
        const obj = {
            name: persons[index].name,
            lastname: persons[index].lastname,
            age: persons[index].age,
            canDrive: persons[index].canDrive
        }
        cantDrive.push(obj)
    } else {
        persons[index].canDrive = true
        const secondobj = {
            name: persons[index].name,
            lastname: persons[index].lastname,
            age: persons[index].age,
            canDrive: persons[index].canDrive
        }
        canDrive.push(secondobj)
    }
});
console.log(persons);

console.log(cantDrive);
console.log(canDrive);


*/

// SOLUZIONE 2

// aggiunta del canDrive al precedente array di oggetti
/*
persons.forEach((element, index) => {
    if (element.age < 18) {
        persons[index].canDrive = false
    } else {
        persons[index].canDrive = true
    }
});

console.log(persons);

*/

// SOLUZIONE 3

// Aggiunta proprietà canDrive con name, last name e age con relativa frase se può o non può guidare

persons.forEach((element, index) => {
    if (element.age < 18) {
        persons[index].canDrive = `non puoi guidare ${persons[index].name} ${persons[index].lastname}, hai solo ${persons[index].age} anni `
    } else {
        persons[index].canDrive = `puoi guidare ${persons[index].name} ${persons[index].lastname}! hai ${persons[index].age} anni `
    }
});

console.log(persons);



