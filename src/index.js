import readlineSync from 'readlineSync';

export const name = () => {
  Const  playerName = readlineSync.question('May I have your name?');
  return `Hello, ${playerName}!`;
}
