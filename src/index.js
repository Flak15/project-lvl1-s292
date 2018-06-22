import readlineSync from 'readline-sync';

export const printGreetings = (rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
};

export const askPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const askQuestion = (question, answer) => {
  console.log(`Question: ${question}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${playerAnswer}' is wrong answer :(. Correct answer was ${answer}`);
  return false;
};

export const game = (questionGenerateFunc, rules) => {
  printGreetings(rules);
  const name = askPlayerName();
  const playRound = (roundsCount) => {
    if (roundsCount === 0) {
      const congratulate = `Congratulations, ${name}!`;
      console.log(congratulate);
      return;
    }
    const questionAndAnswerArr = questionGenerateFunc(roundsCount);
    const [question] = questionAndAnswerArr;
    const [, correctAnswer] = questionAndAnswerArr;
    if (askQuestion(question, correctAnswer)) {
      playRound(roundsCount - 1);
    } else {
      const tryAgain = `Lets try again, ${name}!`;
      console.log(tryAgain);
    }
  };
  const numberOfRounds = 3;
  return playRound(numberOfRounds);
};
