'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);

    function printAge() {
        let output = `${firstName} you are ${age} born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var milenial = true;
            const firstName = 'Steven'
            const str = `Oh, you are a milenial, ${firstName}`
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT';
        }
        //console.log(str);
        console.log(milenial)
        // console.log(add(2,3));
        console.log(output);
    }

    printAge();
    return age
}

const firstName = 'Jonas';
calcAge(1991);

//not defined
// printAge();
