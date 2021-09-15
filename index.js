import { dadJoke as dadJokeFile } from './wrappers/dadjoke.js';
import { getChuckNorrisJoke as getChuckNorrisJokeFile } from './wrappers/chucknorris.js';
import { randomCat, randomFox} from './wrappers/animal.js';
import { memeGenerator as memeGeneratorFile } from './wrappers/meme.js';
import Oxford from './wrappers/oxford.js';

export const oxford = Oxford;
export const memeGenerator = memeGeneratorFile
export const animal = { randomFox, randomCat };
export const getChuckNorrisJoke = getChuckNorrisJokeFile;
export const dadJoke = dadJokeFile;