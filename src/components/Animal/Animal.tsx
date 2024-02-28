import { useParams } from 'react-router-dom';
import './Animal.css';
import englishDataWithIds from '../../../animalDataEnglish';
import spanishDataWithIds from '../../../animalDataSpanish';
import { AnimalType } from '../../types';

interface AnimalProps {
  animal?: AnimalType;
}

function Animal({ animal }: AnimalProps) {
  const { id } = useParams<{ id: string }>();

  if (!animal) {
    const animals = [...englishDataWithIds, ...spanishDataWithIds];
    animal = animals.find(animal => animal.id === Number(id));
  }

  if (!animal) {
    return <div>No animal found</div>;
  }

  return (
    <div className="Animal">
      <div className="Animal-Image-Video">
        {animal.img && <img src={`/images/${animal.img}`} alt={animal.name} />}
        {animal.vid && <video src={`/videos/${animal.vid}`} controls muted loop />}
      </div>
      <h1>{animal.name}</h1>
      <p>{animal.desc}</p>
    </div>
  );
} 

export default Animal;