import { useState } from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './App.css'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Body from './Components/body.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        <Body/>
    </>
  );
}

export default App
