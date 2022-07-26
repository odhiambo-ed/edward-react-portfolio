import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const TypewriterHook = () => {
  const { text } = useTypewriter({
    words: [" a FullStack Web Developer", " an expert in CSS", " an expert in HTML", " an expert in SASS", " an expert in LESS", " an expert in JavaScript", " an expert in Ruby", " an expert in Ruby on Rails", " also a Cyber Security Enthusiast"],
    loop: 2,
    onLoopDone: () => console.log('done from typewriter hook')
  })

  return (
    <div>
      <p>
        I'm
        <span>{text}</span>
      </p>
      <Cursor />
    </div>
  )
}

const Hero = () => {

  return (
    <div className="hero-container" data-aos="fade-in">
      <h1>
        <span className="text-danger">Edward</span> Odhiambo
      </h1>
      <TypewriterHook />
    </div>
  );
};

export default Hero;
