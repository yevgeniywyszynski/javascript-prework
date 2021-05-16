let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}else if(randomNumber == 2){
  computerMove = 'papier';
}else if (randomNumber == 3){
  computerMove = 'nozyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}else if (playerInput == '2'){
  playerMove = 'papier';
}else if (playerInput == '3'){
  playerMove = 'nozyce';
}
//    C    Y
// kamien papier Y -
// papier papier D -
// nozyce papier C

// kamien nozyce C -
// papier nozyce Y -
// nozyce nozyce D -

// kamien kamien D -
// papier kamien C -
// nozyce kamien Y

//kamien nozyce
printMessage('Twój ruch to: ' + playerMove);
if( computerMove == 'kamień' && playerMove == 'papier'){
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
}
