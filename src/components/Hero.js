import React from "react";

const Hero = () => {
  return (
    <div className="hero-container" data-aos="fade-in">
      <h1>
        <span className="text-danger">Edward</span> Odhiambo
      </h1>
      <p>
        I'm
        <span
          class="txt-rotate"
          data-period="2000"
          data-rotate='[ " a FullStack Web Developer,", " an expert in CSS,", " an expert in HTML,", " an expert in SASS,", " an expert in LESS,", " an expert in JavaScript,", " an expert in Ruby,", " an expert in Ruby on Rails,", " also a Cyber Security Enthusiast" ]'
        ></span>
      </p>
    </div>
  );
};

export default Hero;
