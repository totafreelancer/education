import React from 'react';
import './Title.css'
import Programs from './../Programs/Programs';

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;