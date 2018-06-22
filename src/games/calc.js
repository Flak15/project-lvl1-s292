import { game, generateNumber } from '..';

const minQuestionNumber = 1;
const maxQuestionNumber = 50;

const questions = [
  ['*', (x, y) => x * y],
  ['-', (x, y) => x - y],
  ['+', (x, y) => x + y],
];
const description = 'What is the result of the expression?';

const generateQuestion = (roundNum) => {
  const number1 = generateNumber(minQuestionNumber, maxQuestionNumber);
  const number2 = generateNumber(minQuestionNumber, maxQuestionNumber);
  const [sign, calcAnswerFunc] = questions[roundNum - 1];
  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = calcAnswerFunc(number1, number2).toString();
  return [question, correctAnswer];
};

const gameCalc = () => game(generateQuestion, description);

export default gameCalc;
