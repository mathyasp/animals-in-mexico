import './AnimalList.css';
import { Link } from 'react-router-dom';
import { AnimalType } from '../../types';
import englishDataWithIds from '../../../animalDataEnglish';
import spanishDataWithIds from '../../../animalDataSpanish';
// import Animal from '../Animal';
interface AnimalProps {
  isSpanish: boolean;
}

function AnimalList({ isSpanish }: AnimalProps) {
  const data = isSpanish ? spanishDataWithIds : englishDataWithIds;
  
  return (
    <div className='AnimalList'>
      {data.map((animal: AnimalType) => (
        <Link to={`/animals-in-mexico/animal/${animal.id}`} key={animal.id}>
          <div className='AnimalList__animal'>
            <h3>{animal.name}</h3>
            {animal.img && <img src={`/animals-in-mexico/images/${animal.img}`} alt={animal.name} />}
            {animal.vid && <video src={`/animals-in-mexico/videos/${animal.vid}`} controls muted loop />}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AnimalList;