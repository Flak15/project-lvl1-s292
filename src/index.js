import readlineSync from 'readline-sync';

export const askPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const askQuestion = (question, answer) => {
  console.log(`Question: ${question}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${playerAnswer}' is wrong answer :(. Correct answer was ${answer}`);
  return false;
};

export const gameEven = () => {
  const name = askPlayerName();
  const isEven = number => number % 2 === 0;
  const playRound = (roundsCount) => {
    const question = Math.floor(Math.random() * 100);
    if (roundsCount === 0) return console.log(`Congratulations, ${name}!`);
    if (askQuestion(question, isEven(question) ? 'yes' : 'no')) { return playRound(roundsCount - 1); }
    return `Lets try again, ${name}!`;
  };
};
