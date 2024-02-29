import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { AnimalType } from './types';
import englishDataWithIds from '../animalDataEnglish';
import spanishDataWithIds from '../animalDataSpanish';
import Header from './components/Header';
import AnimalList from './components/AnimalList/AnimalList';
import Animal from './components/Animal';
import RandomAnimal from './components/RandomAnimal';
import AnimalFilter from './components/AnimalFilter';

function App() {
  const [isSpanish, setIsSpanish] = useState(false);
  const [randomAnimal, setRandomAnimal] = useState<AnimalType | null>(null);
 
  const handleRandomClick = useCallback(() => {
    const animals: AnimalType[] = isSpanish ? spanishDataWithIds : englishDataWithIds;
    const newRandomAnimal: AnimalType = animals[Math.floor(Math.random() * animals.length)];
    setRandomAnimal(newRandomAnimal);
  }, [isSpanish]);

  useEffect(() => {
    handleRandomClick();
  }, [handleRandomClick]);

  return (
    <div className='App'>
      <Header isSpanish={isSpanish} handleLanguageChange={setIsSpanish} />
      <div className='App-Content'>
        <Link to='/animals-in-mexico/random-animal' className='random-animal-link' onClick={handleRandomClick}>
          {isSpanish ? 'Ver un animal al azar' : 'See a Random Animal'}
        </Link>
        <AnimalFilter isSpanish={isSpanish} />
      </div>

      <Routes>
        <Route 
          path='/animals-in-mexico//*' 
          element={<App />} 
        />
        <Route 
          path='/animals-in-mexico/animal-list' 
          element={<AnimalList isSpanish={isSpanish}/>} 
        />
        <Route 
          path='/animals-in-mexico/animal/:id' 
          element={<Animal isSpanish={isSpanish}/>} 
        />
        <Route
          path='/animals-in-mexico/random-animal'
          element={<RandomAnimal randomAnimalId={randomAnimal?.id ?? null} isSpanish={isSpanish}/>} 
        />
        <Route 
        path='/animals-in-mexico/search-animal' 
        element={<AnimalFilter isSpanish={isSpanish}/>} 
        />
      </Routes>
    </div>
  )
}

export default App;