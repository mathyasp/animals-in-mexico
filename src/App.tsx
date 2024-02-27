import { useState } from 'react'
import Header from './components/Header';
import './App.css'

function App() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className='App'>
      <Header isSpanish={isSpanish} handleLanguageChange={setIsSpanish} />
    </div>
  )
}

export default App
