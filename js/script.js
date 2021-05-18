function playGame(playerInput){
  clearMessages()
    function getMoveName(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      }else if(argMoveId == 2){
        return 'papier'
      }else if(argMoveId == 3){
        return 'nozyce'
      }

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove){
      printMessage('Twój ruch to: ' + argPlayerMove);
      if( argComputerMove== 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('remis');
      }else if ( argComputerMove== 'nozyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrywa!');
      }else if ( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
        printMessage('komputer wygrywa');
      }else if ( argComputerMove== 'papier' && argPlayerMove == 'nozyce'){
        printMessage('Ty wygrywasz!');
      }else if ( argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
        printMessage('remis');
      }else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('remis');
      }else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('komputer wygrywa');
      }else if ( argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = 'nieznany ruch';

    computerMove = getMoveName(randomNumber);
    /*if(randomNumber == 1){
    computerMove = 'kamień';
  }else if(randomNumber == 2){
    computerMove = 'papier';
  }else if (randomNumber == 3){
    computerMove = 'nozyce';
  }*/

  printMessage('Mój ruch to: ' + computerMove);

  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = 'nieznany ruch';

  playerMove = getMoveName(playerInput);
  /*if(playerInput == '1'){
    playerMove = 'kamień';
  }else if (playerInput == '2'){
    playerMove = 'papier';
  }else if (playerInput == '3'){
    playerMove = 'nozyce';
  }*/
  //    C    Y
  // kamien papier Y -
  // papier papier D -
  // nozyce papier C

  // kamien nozyce C -
  // papier nozyce Y -
  // nozyce nozyce D -

  // kamien kamien D -
  // papier kamien C -
  // nozyce kamien Y -

  //kamien nozyce
  /*printMessage('Twój ruch to: ' + playerMove);
  /*if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }else if ( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('remis');
  }else if ( computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
  }else if ( computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('komputer wygrywa');
  }else if ( computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
  }else if ( computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('remis');
  }else if ( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('remis');
  }else if ( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('komputer wygrywa');
  }else if ( computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }*/
  displayResult(computerMove, playerMove)
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissor').addEventListener('click', function(){
  playGame(3);
});
//playGame(3)
