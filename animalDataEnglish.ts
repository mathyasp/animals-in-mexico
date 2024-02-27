import englishData from './animalDataEnglish.json';
import { AnimalType } from './src/types';

englishData.forEach((animal: AnimalType, i: number) => {
  animal.id = i;
});

export default englishData;
