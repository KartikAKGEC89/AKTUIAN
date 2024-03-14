import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Navbar/Home';
import Services from './components/Navbar/Services';
import Banner from './components/Navbar/Banner';

const App = () => {

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    })
  })
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home />
      <Services />
      <Banner />
    </div>
  )
}

export default App
