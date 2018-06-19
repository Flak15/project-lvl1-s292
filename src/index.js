import readlineSync from 'readline-sync';

export const plName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  return `Hello, ${playerName}!`;
};
