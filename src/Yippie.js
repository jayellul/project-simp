import React from 'react';
import './Yippie.css';
import flag from './img/flag.png';

export const Yippie = () => {
  return (
    <div className="yippie">
      <p className="yippie-text">YIPPIEEEE!! 👩🏼‍❤️‍💋‍👩🏻</p>
      <img className="yippie-img" src={flag} alt="flag" />
    </div>
  );
};

export default Yippie;
