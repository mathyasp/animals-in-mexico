import { useParams } from 'react-router-dom';
import './Animal.css';
import englishData from '../../../animalDataEnglish.ts';
import spanishData from '../../../animalDataSpanish.ts';

interface AnimalProps {
  isSpanish: boolean;
}

function Animal ({ isSpanish }: AnimalProps) {
  const data = isSpanish ? spanishData : englishData;
  const params = useParams();
  const { id } = params;
  const { name, desc, img, vid } = data[Number(id)] || {}; // Add default empty object if data[Number(id)] is undefined

  return (
    <div className="Animal">
      <div className="Animal-Image-Video">
        {img && <img src={`/images/${img}`} alt={name} />}
        {vid && <video src={`/videos/${vid}`} controls />}
      </div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{desc}</p>
    </div>
  );
} 

export default Animal;