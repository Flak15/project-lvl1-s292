import { askQuestion, askPlayerName } from '..';

const gameCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
  const name = askPlayerName();
  const questions = [
    ['*', (x, y) => x * y],
    ['-', (x, y) => x - y],
    ['+', (x, y) => x + y],
  ];
  const playRound = (roundsCount) => {
    if (roundsCount === 0) return console.log(`Congratulations, ${name}!`);
    const number1 = Math.floor(Math.random() * 20);
    const number2 = Math.floor(Math.random() * 10);
    const [sign] = questions[roundsCount - 1];
    const [, calcAnswerFunc] = questions[roundsCount - 1];
    const question = `${number1} ${sign} ${number2}`;
    if (askQuestion(question, calcAnswerFunc(number1, number2))) {
      return playRound(roundsCount - 1);
    }
    return `Lets try again, ${name}!`;
  };
  playRound(3);
};

export default gameCalc;
