import { useParams } from 'react-router-dom';
import englishDataWithIds from '../../../animalDataEnglish';
import spanishDataWithIds from '../../../animalDataSpanish';
import Animal from '../Animal/Animal';

interface AnimalSearchResultProps {
  isSpanish: boolean;
}

function AnimalSearchResult({ isSpanish }: AnimalSearchResultProps) {
  const { animalName } = useParams();
  const animals = isSpanish ? spanishDataWithIds : englishDataWithIds;
  const foundAnimal = animals.find(animal => animal.name.toLowerCase() === (animalName ?? '').toLowerCase());

  return foundAnimal ? <Animal animal={foundAnimal} isSpanish={isSpanish} /> : <div>{isSpanish ? 'No se encontró ningún animal' : 'No animal found'}</div>;
}

export default AnimalSearchResult;