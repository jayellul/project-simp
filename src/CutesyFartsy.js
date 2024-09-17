import React from 'react';
import './CutesyFartsy.css';

export const CutesyFartsy = () => {
  const [hearts, setHearts] = React.useState(200);

  //   React.useEffect(() => {
  //     const heartbeat = setInterval(() => {
  //       setHearts((hearts) => hearts + 1);
  //       if (hearts > 500) {
  //         clearInterval(heartbeat);
  //       }
  //     }, 250);

  //     return () => {
  //       clearInterval(heartbeat);
  //     };
  //   }, []);

  return (
    <div className="cutesy">
      <div className="cutesy-list">Cutesy Fartsy</div>

      <div className="cutesy-hearts">
        {Array.from({ length: hearts }).map((_, i) => (
          <span key={i} className="cutesy-heart">
            💖✨💕✨
          </span>
        ))}
      </div>
    </div>
  );
};

export default CutesyFartsy;
