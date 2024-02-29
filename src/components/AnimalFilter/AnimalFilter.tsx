import './AnimalFilter.css'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimalType } from '../../types';
import englishDataWithIds from '../../../animalDataEnglish';
import spanishDataWithIds from '../../../animalDataSpanish';
import Animal from '../Animal/Animal';

interface AnimalFilterProps {
  isSpanish: boolean;
}

function AnimalFilter({ isSpanish }: AnimalFilterProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string | null>('');
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalType | null>(null);

  useEffect(() => {
    setSearchTerm('');
  }, [location.pathname]);

  const handleFocus = () => {
    navigate('/animals-in-mexico/');
  };

  useEffect(() => {
    if (selectedAnimal) {
      const newAnimals = isSpanish ? spanishDataWithIds : englishDataWithIds;
      const animalWithSameId = newAnimals.find(animal => animal.id === selectedAnimal.id);
      if (animalWithSameId) {
        setSearchTerm(animalWithSameId.name || null);
      }
    }
  }, [isSpanish, selectedAnimal]);

  useEffect(() => {
    const animals = isSpanish ? spanishDataWithIds : englishDataWithIds;
    const foundAnimal = animals.find(animal => animal.name.toLowerCase() === (searchTerm?.toLowerCase() || ''));
    setSelectedAnimal(foundAnimal || null);
  }, [searchTerm, isSpanish]);

  return (
    <div className='Animal-Filter'>
      <input
        type='text'
        placeholder={isSpanish ? 'Buscar un animal' : 'Search for an animal'}
        value={searchTerm || ''}
        onChange={event => setSearchTerm(event.target.value)}
        onFocus={handleFocus}
      />
      {selectedAnimal && (<Animal animal={selectedAnimal} isSpanish={isSpanish} />)}
    </div>
  );
}

export default AnimalFilter;