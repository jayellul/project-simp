import React from 'react';
import './Yippie.css';
import flag from './img/flag.png';
import moment from 'moment';

export const Yippie = () => {
  const timeSinceAsking = moment('20240918', 'YYYYMMDD').fromNow();

  return (
    <div className="yippie">
      <p className="yippie-text">YIPPIEEEE!! 👩🏼‍❤️‍💋‍👩🏻</p>
      <img className="yippie-img" src={flag} alt="flag" />
      <p className="yippie-text">
        I know I asked {timeSinceAsking} but still ;)
      </p>
    </div>
  );
};

export default Yippie;
