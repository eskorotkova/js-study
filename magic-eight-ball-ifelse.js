let userName = ''; // Introduce yourself or just leave it empty

//ternary condition
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will it be nice weather tomorrow?'; // Ask me any question here

console.log(`Your question is: ${userQuestion}`);

//generate a random number from 0 to 7
let randomNumber = Math.floor(Math.random() * 8); // default Math.random() is a value from 0 (inclusive) to 1 (exclusive). To make it  decimal we have to use Math.floor()

let eightBall = '';

if(randomNumber == 0){
  eightBall = 'It is certain';
} else if(randomNumber == 1){
  eightBall = 'It is decidedly so';
} else if(randomNumber == 2){
  eightBall = 'Reply hazy try again';
} else if(randomNumber == 3){
  eightBall = 'Cannot predict now';
} else if(randomNumber == 4){
  eightBall = 'Do not count on it';
} else if(randomNumber == 5){
  eightBall = 'My source say no';
} else if(randomNumber == 6){
  eightBall = 'Outlook not so good';
} else if(randomNumber == 7) {
  eightBall = 'Signs points to yes';
} else {
  console.log('Try again')
}

console.log(eightBall);
