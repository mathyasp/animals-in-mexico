import './NavBar.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimalFilter from '../AnimalFilter/AnimalFilter';

interface NavBarProps {
  isSpanish: boolean;
  handleLanguageChange: (isSpanish: boolean) => void;
  handleRandomClick: () => void;
}

function NavBar({ isSpanish, handleLanguageChange, handleRandomClick }: NavBarProps) {
  const [selectedLink, setSelectedLink] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    setSelectedLink(location.pathname);
  }, [location]);

  return (
    <div className='NavBar'>
      <nav className='NavLeft'>
        <Link 
          className={`link ${selectedLink === '/animals-in-mexico/' ? 'selected' : ''}`} 
          to='/animals-in-mexico/'
        >
          {isSpanish ? 'Inicio' : 'Home'}
        </Link>
        <Link 
          className={`link ${selectedLink === '/animals-in-mexico/animal-list' ? 'selected' : ''}`} 
          to='/animals-in-mexico/animal-list'
        >
          {isSpanish ? 'Lista de Animales' : 'Animal List'}
        </Link>
      </nav>

      <div className='NavCenter'>
        <h1>{isSpanish ? 'Animales en México' : 'Animals In Mexico'}</h1>
        <p className='NavSubtitle'>
          {isSpanish
            ? 'Colección de diferentes animales que vi en Puerto Vallarta, México'
            : 'Collection of different animals I saw in Puerto Vallarta, Mexico'}
        </p>
        <p className='NavDate'>{isSpanish ? 'Febrero 2024' : 'February 2024'}</p>
      </div>

      <nav className='NavRight'>
        <div>
          <button
            className={isSpanish ? 'selected' : ''}
            onClick={() => handleLanguageChange(false)}
          >
            EN
          </button>
          <button
            className={!isSpanish ? 'selected' : ''}
            onClick={() => handleLanguageChange(true)}
          >
            ES
          </button>
        </div>
        <AnimalFilter isSpanish={isSpanish} />
        <Link to='/animals-in-mexico/random-animal' className='randomlink' onClick={handleRandomClick}>
          {isSpanish ? 'Animal al azar' : 'Random Animal'}
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
