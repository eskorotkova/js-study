// userInput = 'bomb' allows user to win no matter what. It's a cheat code. 

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return 'ERROR. Incorrect value!';
  };
};
//console.log(getUserChoice('paper'));

const getComputerChoice = () => {
  let computerOption = Math.floor(Math.random() * 3);
  switch (computerOption) {
    case 0: computerOption = 'rock';
    break;
    case 1: computerOption = 'paper';
    break;
    case 2: computerOption = 'scissors';
    break;
  }; 
  return computerOption;
};
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'User won!';
    }; 
  } else if(userChoice === 'paper') {
      if(computerChoice === 'scissors'){
        return 'Computer won!';
      } else {
        return 'User won!';
      };
  } else if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'User won!';
    };
  } else if(userChoice === 'bomb') {
      return 'User won!';
  };
};
//console.log(determineWinner('rock', 'scissors'));

function playGame() {
  let userChoice = getUserChoice('BOMB'); // choose your option: rock, paper, scissors
  let computerChoice = getComputerChoice();
  console.log(`User chose ${userChoice}, computer chose ${computerChoice}.`);
  //let's determine who won
  console.log(determineWinner(userChoice, computerChoice));
};
// let's play game
playGame();
