import React, { useRef, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import backVideo from '/backVideo.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const gsapRef = useRef();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    const left = e.clientX;
    const top = e.clientY;
    setX(left-10);
    setY(top);
  };

  useEffect(() => {
    // Ensure that #video-cover exists in the DOM before gsap runs
    gsap.to(gsapRef.current, {
      backgroundColor: "black", 
      opacity: 1,
      scrollTrigger: {
        trigger: gsapRef.current,
        scroller: "body",
        start: "top middle",
        end: "bottom top",
        scrub: true,
      }
    });
  }, []);

  return (
    <div onMouseMove={handleMouseMove}>      
      <Header/>
      <video className='fixed z-[-100] h-[120vh] w-[100%] object-cover' src={backVideo} autoPlay muted loop/>
      <div ref={gsapRef} id='video-cover' className='h-[100%] w-full bg-black opacity-[0.6] fixed z-[-50]'></div>
      
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Works />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
