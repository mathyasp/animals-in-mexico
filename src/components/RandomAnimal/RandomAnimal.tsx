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
  const randomAnimal = animals.find(animal => animal.id === randomAnimalId);

  return <Animal animal={randomAnimal} isSpanish={isSpanish} />;
}

export default RandomAnimal;