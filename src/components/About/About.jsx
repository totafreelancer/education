import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={ ()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id voluptates vero sit odio nemo non vel corrupti. Eius, itaque animi.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi error optio eos. Accusantium eaque quo hic, quam dignissimos sapiente magni harum natus ducimus provident aliquam assumenda vel, voluptatibus, explicabo maxime.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci perferendis labore eligendi illo non. Accusantium architecto possimus perspiciatis doloribus quisquam neque error saepe nulla.</p>
      </div>
    </div>
  );
};

export default About;