import React from 'react';
import { AnimalType } from '../../types';
import englishDataWithIds from '../../../animalDataEnglish';
import spanishDataWithIds from '../../../animalDataSpanish';

interface RandomAnimalProps {
  isSpanish: boolean;
  randomAnimalId: number | null;
}

const RandomAnimal: React.FC<RandomAnimalProps> = ({ isSpanish, randomAnimalId }) => {
  const animals: AnimalType[] = isSpanish ? spanishDataWithIds : englishDataWithIds;
  const randomAnimal = animals.find(animal => animal.id === randomAnimalId);

  if (!randomAnimal) {
    return <div>No animal selected</div>;
  }

  return (
    <div className="Animal">
      <div className="Animal-Image-Video">
        {randomAnimal.img && <img src={`/images/${randomAnimal.img}`} alt={randomAnimal.name} />}
        {randomAnimal.vid && <video src={`/videos/${randomAnimal.vid}`} controls muted loop />}
      </div>
      <h1>{randomAnimal.name}</h1>
      <p>{randomAnimal.desc}</p>
    </div>
  );
};

export default RandomAnimal;