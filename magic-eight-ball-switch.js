let userName = ''; // Introduce yourself or just leave it empty

//ternary condition
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will it be nice weather tomorrow?'; // Ask me any question here

console.log(`Your question is: ${userQuestion}`);

//generate a random number from 0 to 7
let randomNumber = Math.floor(Math.random() * 8); // default Math.random() is a value from 0 (inclusive) to 1 (exclusive). To make it  decimal we have to use Math.floor()

let eightBall = '';

switch(randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break; 
  case 2:
  eightBall = 'Reply hazy try again';
  break; 
  case 3:
  eightBall = 'Cannot predict now';
  break; 
  case 4:
  eightBall = 'Do not count on it';
  break; 
  case 5:
  eightBall = 'My source say no';
  break; 
  case 6:
  eightBall = 'Outlook not so good';
  break; 
  case 7:
  eightBall = 'Signs points to yes';
  break;
}

console.log(eightBall);
