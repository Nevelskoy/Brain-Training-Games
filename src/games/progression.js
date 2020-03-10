import getRandomInt from '../randomNumber.js';
import playGames from '../index.js';

const gameRule = 'What number is missing in the progression?';
let answer = 0;

const hiddenArray = (array, dot) => {
  answer = array[dot];
  const newArr = array.splice(dot, 1, '..');
  return newArr;
};

const progressionNum = (step, start, dot) => {
  const array = [];
  for (let i = start; array.length < 10; i += 1) {
    i += step;
    array.push(i);
  }
  hiddenArray(array, dot);
  return array;
};

const gameProgression = () => {
  const interval = [2, 3, 4, 5, 6];
  const stepRandom = getRandomInt(4);
  const step = interval[stepRandom];
  const start = getRandomInt(100);
  const dot = getRandomInt(10);
  const gameData = {
    questionGame: `${progressionNum(step, start, dot)}`,
    correctAnswer: String(answer),
  };
  return gameData;
};
export default () => playGames(gameProgression, gameRule);
