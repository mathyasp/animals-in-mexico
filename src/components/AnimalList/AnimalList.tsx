import './AnimalList.css';
import { Link } from 'react-router-dom';
import { AnimalType } from '../../types';
import englishDataWithIds from '../../../animalDataEnglish';
import spanishDataWithIds from '../../../animalDataSpanish';
import Animal from '../Animal';
interface AnimalProps {
  isSpanish: boolean;
}

function AnimalList({ isSpanish }: AnimalProps) {
  const data = isSpanish ? spanishDataWithIds : englishDataWithIds;
  
  return (
    <div className='AnimalList'>
      {data.map((animal: AnimalType) => (
        <Link to={`/animal/${animal.id}`} key={animal.id}>
          <Animal animal={animal} isSpanish={isSpanish} />
        </Link>
      ))}
    </div>
  );
}

export default AnimalList;