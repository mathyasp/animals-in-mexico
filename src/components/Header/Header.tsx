import './Header.css'

interface HeaderProps {
  isSpanish: boolean;
  handleLanguageChange: (isSpanish: boolean) => void;
}

function Header({ isSpanish, handleLanguageChange }: HeaderProps) {
  return (
    <div className='Header'>
      <h1>{isSpanish ? 'Animales en México' : 'Animals In Mexico'}</h1>
      <h2 className='Header-Subtitle'>
        {isSpanish
          ? 'Colección de diferentes animales que vi en Puerto Vallarta, México'
          : 'Collection of different animals I saw in Puerto Vallarta, Mexico'}
      </h2>
      <p>{isSpanish ? 'Febrero 2024' : 'February 2024'}</p>
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
    </div>
  );
}

export default Header;