import { useState } from 'react';
import "./App.css";
import NavNike from './components/NavNike';
import HeroSection from './components/HeroSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavNike />
    <HeroSection />

    </>
    
  )
}

export default App
