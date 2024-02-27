import spanishData from './animalDataSpanish.json';
import { Animal } from './src/types';

spanishData.forEach((animal: Animal, i: number) => {
  animal.id = i;
});

export default spanishData;