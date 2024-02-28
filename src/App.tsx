import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { AnimalType } from './types';
import englishDataWithIds from '../animalDataEnglish';
import spanishDataWithIds from '../animalDataSpanish';
import Header from './components/Header';
import AnimalList from './components/AnimalList/AnimalList';
import Animal from './components/Animal';
import RandomAnimal from './components/RandomAnimal';
import AnimalFilter from './components/AnimalFilter';
import './App.css';

function App() {
  const [isSpanish, setIsSpanish] = useState(false);
  const [randomAnimal, setRandomAnimal] = useState<AnimalType | null>(null);

  const handleRandomClick = () => {
    const animals: AnimalType[] = isSpanish ? spanishDataWithIds : englishDataWithIds;
    const newRandomAnimal: AnimalType = animals[Math.floor(Math.random() * animals.length)];
    setRandomAnimal(newRandomAnimal);
  }

  return (
    <div className='App'>
      <Header isSpanish={isSpanish} handleLanguageChange={setIsSpanish} />
      <Link to="/animal-list" className="animal-list-link">{isSpanish ? 'Ir a la lista de animales' : 'Go to Animal List'}</Link>
      <Link to="/random-animal" className="random-animal-link" onClick={handleRandomClick}>{isSpanish ? 'Ver un animal al azar' : 'See a Random Animal'}</Link>
      <Link to="/search-animal" className="search-animal-link">{isSpanish ? 'Buscar un animal' : 'Search for an Animal'}</Link>
      <Routes>
        <Route path="/animal-list" element={<AnimalList isSpanish={isSpanish}/>} />
        <Route path="/animal/:id" element={<Animal isSpanish={isSpanish}/>} />
        <Route path="/random-animal" element={<RandomAnimal randomAnimalId={randomAnimal?.id ?? null} isSpanish={isSpanish}/>} />
        <Route path="/search-animal" element={<AnimalFilter isSpanish={isSpanish}/>} />
      </Routes>
    </div>
  )
}

export default App;