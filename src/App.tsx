import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { AnimalType } from './types';
import englishDataWithIds from '../animalDataEnglish';
import spanishDataWithIds from '../animalDataSpanish';
import AnimalList from './components/AnimalList/AnimalList';
import Animal from './components/Animal';
import RandomAnimal from './components/RandomAnimal';
import './App.css';
import Header from './components/Header';

function App() {
  const [isSpanish, setIsSpanish] = useState(false);
  const [randomAnimal, setRandomAnimal] = useState<AnimalType | null>(null);

  const handleClick = () => {
    const animals: AnimalType[] = isSpanish ? spanishDataWithIds : englishDataWithIds;
    const newRandomAnimal: AnimalType = animals[Math.floor(Math.random() * animals.length)];
    setRandomAnimal(newRandomAnimal);
  };

  return (
    <div className='App'>
      <Header isSpanish={isSpanish} handleLanguageChange={setIsSpanish} />
      <Link to="/animal-list" className="animal-list-link">Go to Animal List</Link>
      <Link to="/random-animal" className="random-animal-link" onClick={handleClick}>See a Random Animal</Link>
      <Routes>
        <Route path="/animal-list" element={<AnimalList isSpanish={isSpanish}/>} />
        <Route path="/animal/:id" element={<Animal />} />
        <Route path="/random-animal" element={<RandomAnimal randomAnimalId={randomAnimal?.id ?? null} isSpanish={isSpanish}/>} />
      </Routes>
    </div>
  )
}

export default App