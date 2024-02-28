import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AnimalList from './components/AnimalList/AnimalList';
import Animal from './components/Animal';
import './App.css';
import Header from './components/Header';

function App() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className='App'>
      <Header isSpanish={isSpanish} handleLanguageChange={setIsSpanish} />
      <Link to="/animal-list" className="animal-list-link">Go to Animal List</Link>
      <Routes>
        <Route path="/animal-list" element={<AnimalList isSpanish={isSpanish}/>} />
        <Route path="/animal/:id" element={<Animal />} />
      </Routes>
    </div>
  )
}

export default App