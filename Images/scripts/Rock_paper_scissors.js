    let result ='';
    let computerMove = '';
   
    function generateRandom() {
      randomNumber = Math.random();
    
      if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove ='rock';
      }
      else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      }
      else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
      }
    }
    
    let score = JSON.parse(localStorage.getItem('score'));

    if (score === null){
      score = {
        Win : 0,
        Losses : 0,
        Ties : 0
      }
      }

    console.log(score);

    function updateScores(){
      document.querySelector('.display').innerHTML =
      `Wins : ${score.Win}, Losses : ${score.Losses}, Ties : ${score.Ties}`

    }

    function playGame(playerMove){
     
      generateRandom();
    
      if (playerMove === 'paper'){
        
        if (computerMove === 'rock'){
          result = 'You Win';
        }
        else if (computerMove === 'scissors'){
          result = 'You Lose';
        }
        else if(computerMove === 'paper'){
          result = 'Ties'
        }
        
      }
      
      else if (playerMove === 'rock'){
       
        if (computerMove === 'rock'){
          result = 'Ties';
        }
        else if (computerMove === 'scissors'){
          result = 'You Win';
        }
        else if(computerMove === 'paper'){
          result = 'You Lose';
        }
     
      }
      
      else if (playerMove === 'scissors'){
        
        if (computerMove === 'rock'){
          result = 'You Lose';
        }
        else if (computerMove === 'scissors'){
          result = 'Ties';
        }
        else if(computerMove === 'paper'){
          result = 'You Win';
        }

      }

      if (result === 'You Win'){
        score.Win += 1;
      }
      else if (result === 'You Lose'){
        score.Losses += 1;
      }
      else if (result === 'Ties'){
        score.Ties += 1;
      }

      localStorage.setItem('score',JSON.stringify(score));
      
      updateScores();

      document.querySelector('.status').innerHTML = result;

      document.querySelector('.moves').innerHTML =
       `You : <img src="Images/${playerMove}-emoji.png" class="image">
       <img src="Images/${computerMove}-emoji.png" class="image">  : Computer`;


  }