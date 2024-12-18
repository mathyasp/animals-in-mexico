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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    setSelectedLink(location.pathname);
  }, [location]);

  return (
    <div className='NavBar'>
      <nav className='NavLeft'>
        <button className='hamburger' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          &#9776;
        </button>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            className={`link ${selectedLink === '/animals-in-mexico/' ? 'selected' : ''}`} 
            to='/animals-in-mexico/'
          >
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
        </div>
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
        <div className='Translate'>
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
        <div className='TaskBars'>
          <AnimalFilter isSpanish={isSpanish} />
          <Link to='/animals-in-mexico/random-animal' className='randomlink' onClick={handleRandomClick}>
            {isSpanish ? 'Animal al azar' : 'Random Animal'}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
