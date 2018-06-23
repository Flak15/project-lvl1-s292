import game from '..';
import generateNumber from '../utils';

const isPrime = (number) => {
  const iter = (num, divisor) => {
    if (num % divisor === 0) return false;
    if (divisor > Math.sqrt(num)) return true;
    return iter(num, divisor + 1);
  };
  return iter(number, 2);
};

const minQuestionNumber = 1;
const maxQuestionNumber = 50;

const description = 'Is this number is prime?';

const makeQuestionAndAnswer = () => {
  const question = generateNumber(minQuestionNumber, maxQuestionNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gamePrime = () => game(makeQuestionAndAnswer, description);

export default gamePrime;
