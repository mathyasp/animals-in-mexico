import spanishData from './animalDataSpanish.json';
import { AnimalType } from './src/types';

const spanishDataWithIds: AnimalType[] = spanishData.map((animal, i) => ({
  id: i,
  ...animal
}));

export default spanishDataWithIds;