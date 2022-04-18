/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1,2,3);
console.log("Sum", sum)

// Extra arguments are ignored

let sum2 = sumAll(1,2,3,4,5,6); // note that more than 3 numbers given but function has only 3 parameters
console.log("sum2", sum2); // output only counts first 3 as in defined


// Function using ...rest

const sumRest = (a, b, c, ...rest) => {
    let sum = a+b+c;
    for (let i of rest) { // iterate rest as need to know how many under rest 
        sum += i; // continue adding
    }

    return sum; // break the loop return result outside the loop
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6); //again more numbers than defined

console.log("sum3", sum3) // calling some from the loop result 21