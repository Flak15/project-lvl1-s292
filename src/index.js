import readlineSync from 'readline-sync';

const printGreetings = (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
};

const askPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const askQuestion = (question, answer) => {
  console.log(`Question: ${question}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${playerAnswer}' is wrong answer :(. Correct answer was ${answer}`);
  return false;
};

export const generateNumber = (minNumber, maxNumber) =>
  Math.floor(Math.random() * ((maxNumber - minNumber) + minNumber));


const numberOfRounds = 3;

export const game = (questionGenerateFunc, gameDescription) => {
  printGreetings(gameDescription);
  const name = askPlayerName();
  const playRound = (roundsCount) => {
    if (roundsCount === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const questionAndAnswerArr = questionGenerateFunc(roundsCount);
    const [question, correctAnswer] = questionAndAnswerArr;
    if (askQuestion(question, correctAnswer)) {
      playRound(roundsCount - 1);
    } else {
      console.log(`Lets try again, ${name}!`);
    }
  };
  return playRound(numberOfRounds);
};
