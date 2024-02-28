import { Link } from 'react-router-dom';
import './AnimalList.css';
import Animal from '../Animal';
import { AnimalType } from '../../types';
import englishDataWithIds from '../../../animalDataEnglish';
import spanishDataWithIds from '../../../animalDataSpanish';

interface AnimalProps {
  isSpanish: boolean;
}

function AnimalList({ isSpanish }: AnimalProps) {
  const data = isSpanish ? spanishDataWithIds : englishDataWithIds;
  
  return (
    <div className="AnimalList">
      {data.map((animal: AnimalType) => (
        <Link to={`/animal/${animal.id}`} key={animal.id}>
          <Animal animal={animal} />
        </Link>
      ))}
    </div>
  );
}

export default AnimalList;