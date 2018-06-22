import { game } from '..';

const balanceNum = (num) => {
  const numLength = num.toString().length;
  const answer = [];
  const digitsSum = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  const newNum = (SumOfNum, length) => {
    if (length === 0) return answer;
    const newDigit = Math.round(SumOfNum / length);
    answer.push(newDigit);
    return newNum(SumOfNum - newDigit, length - 1);
  };
  return newNum(digitsSum, numLength).sort((a, b) => a > b).join('');
};

const rules = 'Balance the given number';

const generateQuestion = () => {
  const number1 = Math.floor(Math.random() * 1000);
  const question = `${number1}`;
  const correctAnswer = balanceNum(number1);
  return [question, correctAnswer];
};

const gameBalance = () => game(generateQuestion, rules);

export default gameBalance;
