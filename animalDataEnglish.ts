import englishData from './animalDataEnglish.json';
import { Animal } from './src/types';

englishData.forEach((animal: Animal, i: number) => {
  animal.id = i;
});

export default englishData;
