import './NavBar.css';
import { Link } from 'react-router-dom';

interface NavBarProps {
  isSpanish: boolean;
}

function NavBar({ isSpanish }: NavBarProps) {
  return (
    <nav>
      <Link className='link' to='/animals-in-mexico/'>
        {isSpanish ? 'Inicio' : 'Home'}
      </Link>
      <Link className='link' to='/animals-in-mexico/animal-list'>
        {isSpanish ? 'Lista de Animales' : 'Animal List'}
      </Link>
    </nav>
  );
}

export default NavBar;