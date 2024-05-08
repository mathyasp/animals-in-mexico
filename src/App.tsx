import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { AnimalType } from './types';
import englishDataWithIds from '../animalDataEnglish';
import spanishDataWithIds from '../animalDataSpanish';
import Map from './components/Map/Map';
import NavBar from './components/NavBar/NavBar';
import AnimalList from './components/AnimalList/AnimalList';
import Animal from './components/Animal';
import RandomAnimal from './components/RandomAnimal';

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
      <NavBar isSpanish={isSpanish} handleLanguageChange={setIsSpanish} handleRandomClick={handleRandomClick} />
      <Routes>
        <Route 
          path='/animals-in-mexico/' 
          element={
            <>
              <Map />
            </>
          } 
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
      </Routes>
    </div>
  )
}

export default App;