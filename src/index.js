import readlineSync from 'readline-sync';

export const plName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const question = () => {
  const num = Math.floor(Math.random() * 100);
  console.log(`Question: ${num}`);
  const plAns = readlineSync.question('Your answer: ');
  const ans = { yes: 1, no: 0 };
  if ((num % 2) + ans[plAns] === 1) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${plAns}' is wrong answer :(. Correct answer was ${num % 2 === 0 ? "'yes'" : "'no'"}`);
  return false;
};

export const game = (name, rounds) => {
  if (rounds === 0) return console.log(`Congratulations, ${name}!`);
  return question() ? game(name, rounds - 1) : console.log(`Lets try again, ${name}!`);
};
