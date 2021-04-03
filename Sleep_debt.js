//always put an else at the end of a if/else if statement
const getSleepHours = day => {
    day = day.toLowerCase();
if (day === 'monday') {
    return  7.5;
} 
else if (day === 'tuesday'){
    return 7.5;
}   
else if (day === 'wednesday'){
    return 8.5;
} 
else if (day === 'thursday'){
    return 10;
}
else if (day === 'friday'){
    return 7;
}
else if (day === 'saturday'){
    return 7;
}
else if (day === 'sunday'){
    return 5;
}else {
    return 'Put in a vaild day of the week';
}

}

const getActualSleepHours = () =>{
   return sum = getSleepHours('monday')+ 
    getSleepHours('tuesday')+
    getSleepHours('wednesday')+
    getSleepHours('thursday')+
    getSleepHours('friday')+
    getSleepHours('saturday')+
    getSleepHours('sunday')

}
const getIdealSleepHours = () =>{
    let idealHours= 7.5
    return idealHours * 7
  }

const calculateSleepDebt = () =>{
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
        return 'You got the perfect amount of sleep this week'
      } else if(idealSleepHours > actualSleepHours){
        console.log('You need to get more sleep. ' +  ' This is how many hours your were under ' + (idealSleepHours - actualSleepHours))
      }else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours- actualSleepHours) + ' more hours of sleep ');
      }else{
          return error;
      }
  }
  console.log(calculateSleepDebt())
