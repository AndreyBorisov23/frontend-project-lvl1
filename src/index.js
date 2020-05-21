import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utilites.js';

const brainGames = (mission, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${mission}`);
  const roundsCounter = 3;
  for (let i = 0; i < roundsCounter; i += 1) {
    const gameData = getGameData();
    const question = getQuestion(gameData);
    const correctAnswer = getAnswer(gameData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default brainGames;
