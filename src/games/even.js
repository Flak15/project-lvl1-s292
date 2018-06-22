import { game } from '..';

const isEven = number => number % 2 === 0;

const rules = 'Answer "yes" if number even otherwise answer "no"';

const generateQuestion = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameEven = () => game(generateQuestion, rules);

export default gameEven;
