import { game, generateNumber } from '..';

const minQuestionNumber = 100;
const maxQuestionNumber = 10000;

const balanceNum = (num) => {
  const lengthOfNum = num.toString().length;
  const digitsSum = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  const calculateNewNum = (SumOfNum, length) => {
    if (length === 0) return '';
    const newDigit = Math.round(SumOfNum / length);
    return [newDigit, ...calculateNewNum(SumOfNum - newDigit, length - 1)];
  };
  return calculateNewNum(digitsSum, lengthOfNum).sort((a, b) => a > b).join('');
};

const description = 'Balance the given number';

const generateQuestion = () => {
  const number = generateNumber(minQuestionNumber, maxQuestionNumber);
  const question = `${number}`;
  const correctAnswer = balanceNum(number);
  return [question, correctAnswer];
};

const gameBalance = () => game(generateQuestion, description);

export default gameBalance;
