import React from 'react';
import './Hero.css';
import dack_arroow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to emower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore more <img src={dack_arroow} alt=''/></button>
      </div>
    </div>
  );
};

export default Hero;