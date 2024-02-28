import { useState, useEffect } from 'react';
import { AnimalType } from '../../types';
import englishDataWithIds from '../../../animalDataEnglish';
import spanishDataWithIds from '../../../animalDataSpanish';
import Animal from '../Animal/Animal';

interface AnimalFilterProps {
  isSpanish: boolean;
}

function AnimalFilter({ isSpanish }: AnimalFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalType | null>(null);

  useEffect(() => {
    if (selectedAnimal) {
      const newAnimals = isSpanish ? spanishDataWithIds : englishDataWithIds;
      const animalWithSameId = newAnimals.find(animal => animal.id === selectedAnimal.id);
      if (animalWithSameId) {
        setSearchTerm(animalWithSameId.name);
      }
    }
  }, [isSpanish, selectedAnimal]);

  useEffect(() => {
    const animals = isSpanish ? spanishDataWithIds : englishDataWithIds;
    const foundAnimal = animals.find(animal => animal.name.toLowerCase() === searchTerm.toLowerCase());
    setSelectedAnimal(foundAnimal || null);
  }, [searchTerm, isSpanish]);

  return (
    <div>
      <input
        type="text"
        placeholder={isSpanish ? "Buscar un animal" : "Search for an animal"}
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      {selectedAnimal && <Animal animal={selectedAnimal} isSpanish={isSpanish} />}
    </div>
  );
}

export default AnimalFilter;