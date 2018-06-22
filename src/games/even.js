import { game, generateNumber } from '..';

const isEven = number => number % 2 === 0;

const minQuestionNumber = 1;
const maxQuestionNumber = 100;

const description = 'Answer "yes" if number even otherwise answer "no"';

const generateQuestion = () => {
  const question = generateNumber(minQuestionNumber, maxQuestionNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameEven = () => game(generateQuestion, description);

export default gameEven;
