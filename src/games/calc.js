import { game } from '..';

const questions = [
  ['*', (x, y) => x * y],
  ['-', (x, y) => x - y],
  ['+', (x, y) => x + y],
];
const rules = 'What is the result of the expression?';

const generateQuestion = (roundNum) => {
  const number1 = Math.floor(Math.random() * 20);
  const number2 = Math.floor(Math.random() * 10);
  const [sign] = questions[roundNum - 1];
  const [, calcAnswerFunc] = questions[roundNum - 1];
  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = calcAnswerFunc(number1, number2).toString();
  return [question, correctAnswer];
};

const gameCalc = () => game(generateQuestion, rules);

export default gameCalc;
