import readlineSync from 'readline-sync';

const askPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const numberOfRounds = 3;

const game = (questionGenerateFunc, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const name = askPlayerName();
  const playGame = (roundsCount) => {
    if (roundsCount === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const questionAndAnswerArr = questionGenerateFunc(roundsCount);
    const [question, correctAnswer] = questionAndAnswerArr;
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      playGame(roundsCount - 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer :(. Correct answer was ${correctAnswer}`);
      console.log(`Lets try again, ${name}!`);
    }
  };
  return playGame(numberOfRounds);
};

export default game;
