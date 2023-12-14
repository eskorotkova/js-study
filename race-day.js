let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let runnerAge = 22;

if(runnerAge > 18 && earlyRegister){
  raceNumber += 1000;
}

if(runnerAge > 18 && earlyRegister){
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}`)
} else if(runnerAge > 18 && earlyRegister == false){
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`)
} else if(runnerAge < 18) {
  console.log(`Youth registrant run at 12:30 pm (regardless of registration). Your race number is: ${raceNumber}`)
} else {
  console.log('Please, see the registration desk')
}
