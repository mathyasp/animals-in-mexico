import spanishData from './animalDataSpanish.json';
import { AnimalType } from './src/types';

spanishData.forEach((animal: AnimalType, i: number) => {
  animal.id = i;
});

export default spanishData;