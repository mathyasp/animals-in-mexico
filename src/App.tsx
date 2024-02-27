import { useState } from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className='App'>
      <Header isSpanish={isSpanish} handleLanguageChange={setIsSpanish} />
      
    </div>
  )
}

export default App
