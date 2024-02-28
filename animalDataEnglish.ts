import englishData from './animalDataEnglish.json';
import { AnimalType } from './src/types';

const englishDataWithIds: AnimalType[] = englishData.map((animal, i) => ({
  id: i,
  ...animal
}));

export default englishDataWithIds;