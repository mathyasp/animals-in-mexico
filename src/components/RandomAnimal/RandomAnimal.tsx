import { AnimalType } from '../../types';
import englishDataWithIds from '../../../animalDataEnglish';
import spanishDataWithIds from '../../../animalDataSpanish';
import Animal from '../Animal/Animal';

interface RandomAnimalProps {
  isSpanish: boolean;
  randomAnimalId: number | null;
}

function RandomAnimal({ isSpanish, randomAnimalId }: RandomAnimalProps): JSX.Element {
  const animals: AnimalType[] = isSpanish ? spanishDataWithIds : englishDataWithIds;
  let randomAnimal = null;
  
  if (randomAnimalId !== null) {
    randomAnimal = animals.find(animal => animal.id === randomAnimalId);
  }

  return randomAnimal ? <Animal animal={randomAnimal} isSpanish={isSpanish} /> : <p>No animal found</p>;
}

export default RandomAnimal;