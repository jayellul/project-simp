import React from 'react';
import './CutesyFartsy.css';
import { AttentionSeeker, Slide, Fade } from 'react-awesome-reveal';
import otter from './img/otter.gif';

export const CutesyFartsy = () => {
  const [hearts, setHearts] = React.useState(200);

  // React.useEffect(() => {
  //   const heartbeat = setInterval(() => {
  //     setHearts((hearts) => hearts + 1);
  //     if (hearts > 500) {
  //       clearInterval(heartbeat);
  //     }
  //   }, 250);

  //   return () => {
  //     clearInterval(heartbeat);
  //   };
  // }, []);

  return (
    <div className="cutesy">
      <Slide className="cutesy-list" direction="down">
        <div>
          <Fade cascade>
            <h1>Hey baby girl...</h1>
            <h2>Endless otter time</h2>
            <img src={otter} />
            <br />

            <h2>Diddles</h2>
            <div className="cutesy-eyes">
              {Array.from({ length: 20 }).map((_, i) => (
                <span className="eyes-eyes" key={i}>
                  💦🥵
                </span>
              ))}
            </div>
            <br />

            <h2>Lots of adventures together</h2>
          </Fade>
        </div>
      </Slide>

      <div className="cutesy-hearts">
        {Array.from({ length: hearts }).map((_, i) => (
          <span className="cutesy-heart" key={i}>
            💖✨💕✨
          </span>
        ))}
      </div>
    </div>
  );
};

export default CutesyFartsy;
