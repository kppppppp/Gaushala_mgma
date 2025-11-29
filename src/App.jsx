import { useState } from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './App.css'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Body from './Components/body.jsx'
import Showcase from './Components/Showcase.jsx';
import AOS from "aos";
import ShelterStats from './Components/ShelterStats.jsx';
import AdoptionSection from './Components/AdoptionSection.jsx';
import AdoptionCarousel from './Components/AdoptionCarousel.jsx';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        <Body/>
        <Showcase/>
        <ShelterStats/>
        <AdoptionSection/>
        <AdoptionCarousel/>
    </>
  );
}




export default App
