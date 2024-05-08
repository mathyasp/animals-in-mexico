import './AnimalFilter.css'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimalType } from '../../types';
import Animal from '../Animal/Animal';

interface AnimalFilterProps {
  isSpanish: boolean;
}

function AnimalFilter({ isSpanish }: AnimalFilterProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string | null>('');
  const [selectedAnimal] = useState<AnimalType | null>(null);

  useEffect(() => {
    setSearchTerm('');
  }, [location.pathname]);

  const handleFocus = () => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className='Animal-Filter'>
      <input
        type='text'
        placeholder={isSpanish ? 'Buscar un animal' : 'Search for an animal'}
        value={searchTerm || ''}
        onChange={event => setSearchTerm(event.target.value)}
        onKeyDown={event => {
          if (event.key === 'Enter' && searchTerm) {
            navigate(`/search/${searchTerm}`);
          }
        }}
        onFocus={handleFocus}
      />
      {selectedAnimal && (<Animal animal={selectedAnimal} isSpanish={isSpanish} />)}
    </div>
  );
}

export default AnimalFilter;