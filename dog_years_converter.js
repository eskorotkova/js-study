const myAge = 27; //my human age 

let earlyYears = 2; // first 2 years 
earlyYears *= 10.5; // first 2 human years counts as 10,5 for each year

let laterYears = myAge - 2; // from 3rd year and more
laterYears *= 4; // left years multiply by 4

let myAgeInDogYears = earlyYears + laterYears; // human age converted to dog years

const myName = 'Kate'.toLowerCase(); // my name to lower case 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
