import game from '..';
import generateNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers';

const minQuestionNumber = 4;
const maxQuestionNumber = 100;

const gcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
};

const makeQuestionAndAnswer = () => {
  const number1 = generateNumber(minQuestionNumber, maxQuestionNumber);
  const number2 = generateNumber(minQuestionNumber, maxQuestionNumber);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2).toString();
  return [question, correctAnswer];
};

const gameGCD = () => game(makeQuestionAndAnswer, description);

export default gameGCD;
