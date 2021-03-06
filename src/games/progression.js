import game from '..';
import generateNumber from '../utils';

const progressionLength = 10;
const minStartNumber = 3;
const maxStartNumber = 20;
const minStep = 2;
const maxStep = 5;
const minIndexUnknownNumber = 1;
const maxIndexUnknownNumber = 10;

const description = 'What number is missing in this progression?';

const makeQuestionAndAnswer = () => {
  const startNumber = generateNumber(minStartNumber, maxStartNumber);
  const step = generateNumber(minStep, maxStep);
  const unknownNumberIndex = generateNumber(minIndexUnknownNumber, maxIndexUnknownNumber);
  const generateProgression = (indexOfProgressionElem) => {
    if (indexOfProgressionElem === 0) return '';
    if (indexOfProgressionElem === unknownNumberIndex) {
      return [...generateProgression(indexOfProgressionElem - 1), '..'];
    }
    return [...generateProgression(indexOfProgressionElem - 1),
      startNumber + (indexOfProgressionElem * step)];
  };
  const correctAnswer = (startNumber + (unknownNumberIndex * step)).toString();
  const question = generateProgression(progressionLength).join(' ');
  return [question, correctAnswer];
};

const gameProgression = () => game(makeQuestionAndAnswer, description);

export default gameProgression;
