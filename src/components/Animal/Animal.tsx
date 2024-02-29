import './Animal.css';
import { useParams } from 'react-router-dom';
import { AnimalType } from '../../types';
import englishDataWithIds from '../../../animalDataEnglish';
import spanishDataWithIds from '../../../animalDataSpanish';
interface AnimalProps {
  animal?: AnimalType;
  isSpanish: boolean;
}

function Animal({ animal, isSpanish }: AnimalProps) {
  const { id } = useParams<{ id: string }>();

  if (!animal) {
    let animals: AnimalType[] = [];
    if (isSpanish) {
      animals = [...spanishDataWithIds];
    } else {
      animals = [...englishDataWithIds];
    }
    animal = animals.find(animal => animal.id === Number(id));
  }

  if (!animal) {
    return <div>{isSpanish ? 'No se encontró ningún animal' : 'No animal found'}</div>;
  }

  return (
    <div className='Animal'>
      <h1>{animal.name}</h1>
      <p>{animal.desc}</p>
      <div className='Animal-Image-Video'>
        {animal.img && <img src={`/animals-in-mexico/images/${animal.img}`} alt={animal.name} />}
        {animal.vid && <video src={`/animals-in-mexico/videos/${animal.vid}`} controls muted loop />}
      </div>
    </div>
  );
} 

export default Animal;