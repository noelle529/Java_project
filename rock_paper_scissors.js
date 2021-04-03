function getUserChoice(userInput){
    userInput =userInput.toLowerCase();
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
      return userInput
    }
    else{
      console.log("there is a error")
    }
    }

function getComputerChoice(){
        randomChoice = Math.floor(Math.random()*3)
        switch (randomChoice) {
            case 0:
                return 'rock';
                break;
            case 1:
                return 'paper';
                break;

            default:
                return 'scissors';
        }
    }
    
function determineWinner(userChoice, computerChoice){
        if(userChoice === computerChoice){
          return 'Tie!!!'
        }
        else if(userChoice==='rock'){
          if(computerChoice==='paper'){
            return 'Computer Won!!!'
          }else{
            return 'The User Won!!!'
          }
        }
        else if(userChoice==='scissors'){
          if(computerChoice==='rock'){
            return 'Computer Won!!!'
          }else{
            return 'The User Won!!!'
          }
        }
        else if(userChoice==='scissors'){
          if(computerChoice==='paper'){
            return 'Computer Won!!!'
          }else{
            return 'The User Won!!!'
          }
        }
      }

      function playGame(){
        let userChoice = getUserChoice('scissors');
        let computerChoice = getComputerChoice();
        console.log('User threw: ' + userChoice);
        console.log('Computer threw: ' + computerChoice);
        console.log(determineWinner(userChoice,computerChoice))
      }
      
console.log(playGame())