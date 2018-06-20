import readlineSync from 'readline-sync';

const plName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  return `Hello, ${playerName}!`;
};

export default plName;
