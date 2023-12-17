const getSleepHours = day => {
  day = day.toLowerCase();
  let hoursOfSleep; // how many hours you slept each day
  switch(day){
    case 'monday': hoursOfSleep = 8;
    break;
    case 'tuesday': hoursOfSleep = 5;
    break;
    case 'wednesday': hoursOfSleep = 6;
    break;
    case 'thursday': hoursOfSleep = 8;
    break;
    case 'friday': hoursOfSleep = 9;
    break;
    case 'saturday': hoursOfSleep = 10;
    break;
    case 'sunday': hoursOfSleep = 9;
    break;
    default: return 'Error. Invalid day of the week!'
  };
  return hoursOfSleep;
};
//console.log(getSleepHours('friday'))

//total actual sleep hours of the whole week
//use implicit return 
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
//console.log(getActualSleepHours());

const getIdealSleepHours = hours => {
  let idealHours = hours; // ideal hours of sleep per night
  return idealHours *= 7; // total ideal hours of sleep for the whole week
};
//console.log(getIdealSleepHours(9));

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(9); // set an ideal amount of hours of sleep
  if(actualSleepHours === idealSleepHours){
    return 'User got the perfect amount of sleep!';
  } else if(actualSleepHours > idealSleepHours){
    let sleptHours = actualSleepHours - idealSleepHours;
    return `User got more sleep than needed. Overslept for ${sleptHours} hours.`;
  } else if(actualSleepHours < idealSleepHours){
    let sleptHours = idealSleepHours - actualSleepHours;
    return 'Sleep deprivation. User should get some rest.' + ` Sleep Debt ${sleptHours} hours.`;
  };
};
console.log(calculateSleepDebt());
