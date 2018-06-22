import { game, generateNumber } from '..';

const description = 'Find the greatest common divisor of given numbers';

const minQuestionNumber = 4;
const maxQuestionNumber = 100;

const gcd = (num1, num2) => {
  const findDivisors = (divisor) => {
    if (divisor === 0) return '';
    if (num1 % divisor === 0) { return [divisor, ...findDivisors(divisor - 1)]; }
    return findDivisors(divisor - 1);
  };
  const divisorsArr = [num1, ...findDivisors(Math.floor(num1 / 2))];
  return divisorsArr.find(div => num2 % div === 0);
};

const generateQuestion = () => {
  const number1 = generateNumber(minQuestionNumber, maxQuestionNumber);
  const number2 = generateNumber(minQuestionNumber, maxQuestionNumber);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2).toString();
  return [question, correctAnswer];
};

const gameGCD = () => game(generateQuestion, description);

export default gameGCD;
