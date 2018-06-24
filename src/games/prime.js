import game from '..';
import generateNumber from '../utils';

const isPrime = (number) => {
  if (number < 2) return false;
  const iter = (divisor) => {
    if (divisor > Math.sqrt(number)) return true;
    if (number % divisor === 0) return false;
    return iter(divisor + 1);
  };
  return iter(2);
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
