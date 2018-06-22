import { game } from '..';

const rules = 'Find the greatest common divisor of given numbers';

const GCD = (num1, num2) => {
  const divisorsArr = [num1];
  const findDivisors = (num, divisor) => {
    if (divisor === 0) return divisorsArr;
    if (num % divisor === 0) divisorsArr.push(divisor);
    return findDivisors(num, divisor - 1);
  };
  findDivisors(num1, Math.floor(num1 / 2));
  return divisorsArr.find(div => num2 % div === 0);
};

const generateQuestion = () => {
  const number1 = Math.floor(Math.random() * 30);
  const number2 = Math.floor(Math.random() * 30);
  const question = `${number1} ${number2}`;
  const correctAnswer = GCD(number1, number2).toString();
  return [question, correctAnswer];
};

const gameGCD = () => game(generateQuestion, rules);

export default gameGCD;
