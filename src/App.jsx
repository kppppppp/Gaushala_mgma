import { useState } from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './App.css'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Body from './Components/body.jsx'
import Showcase from './Components/Showcase.jsx';
import AOS from "aos";






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        <Body/>
        <Showcase/>
    </>
  );
}




export default App
