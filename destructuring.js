/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */



// Destructuring arrays

let ages = [30,26,27];
// let john = ages[0]; // old way
// let mary = ages[1];
// let joe = ages[2];

let [john,mary,joe] = ages;
console.log(john, mary,joe)


// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let {mike, jill , alicia} = jobs;
console.log(mike, jill,alicia);


// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, JohnSecondary] = languages;
console.log(johnNative, JohnSecondary);

let [ , , maryNative, marySecondary] = languages; // need blank comas to skip values in array
console.log(maryNative, marySecondary);


let languages2 = {
    firsLan: "english",
    sencLan: "french",
    thirLan: "german",
    forLan: "japanese", 
};

let {firsLan, thirLan} = languages2;
console.log(firsLan,thirLan);

// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;

console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steaks",
};

let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);