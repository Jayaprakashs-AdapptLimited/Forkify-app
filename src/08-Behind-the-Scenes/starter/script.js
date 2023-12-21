'use strict';

const calcAge = (birthYear) => {
    const age= 2023 - birthYear;
    // console.log(firstName);
    const printAge = () => {
        const result = `${firstName}, You are ${age} born in ${birthYear}`;
        console.log(result, "Result");

        if(birthYear >= 1980 && birthYear <= 1999) {
            var sttt = true;
            const millenial = `oh! You are a millenial, ${firstName}`;
            console.log(millenial);

            // Functions are block scoped
            function add(a, b) {
                return a + b;
            }

        }
        // console.log(millenial, "Millenial");
        console.log(sttt);

        // Functions are block scoped
        // console.log(add(3,5));

    }
    printAge();
    return age;
}

const firstName = 'Shami';
calcAge(1980);

////////////////////////////

console.log(this);
// Regular Function and Arrow function
const raj = {
    firstName: 'Raj',
    year: 1997,
    calcAge: function() {
        // console.log(this);
        console.log(2024 - this.year);

        const isMillenial = function(){
            // console.log(this);
            // console.log(this.year >= 1981 && this.year <= 1999);
        }
        isMillenial();
    },

    // greet: () => console.log(`Hey ${this.firstName}`)
    greet: function(){
        console.log(`Hey ${this.firstName}`);
    }
};

raj.calcAge();
raj.greet();

////////////////
// PRIMITIVES VS OBJECTS
let age = 18;
let oldAge = age;
console.log(oldAge);
age = 20;
console.log(age);
console.log(oldAge);

const me = {
    name: 'jonas',
    age: 18,
};

const friend = me;
friend.age = 25;
console.log(friend, 'Friend');
console.log(me, 'me');


////////////
// Primitive types
let lastName = 'Kapoor';
let oldLastName = lastName;

lastName = 'Samy';
console.log(lastName, oldLastName);

// Reference types
const Angelina = {
    firstName: 'Angelina',
    lastName: 'Jolie',
    age: 27,
}

const marriedAngelina = Angelina;
marriedAngelina.lastName = 'Kapoor';
console.log('Before Marriage', Angelina);
console.log('After Marriage', marriedAngelina);

// marriedAngelina = {};

// Copying Objects
