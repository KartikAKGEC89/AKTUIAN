import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
