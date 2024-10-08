import React from 'react';
import './App.css';
import Password from './Password';
import CutesyFartsy from './CutesyFartsy';
import Yippie from './Yippie';

const App = () => {
  const [phase, setPhase] = React.useState(1);
  console.log('p: ', phase);

  const onSuccess = () => {
    setPhase((prev) => prev + 1);
  };

  const getBg = () => {
    if (phase === 2) {
      return '#d161a2';
    }
    if (phase === 3) {
      return '#FFFAA0';
    }
    return '#141414';
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: getBg() }}>
        {phase === 1 && <Password onSuccess={onSuccess} />}
        {phase === 2 && <CutesyFartsy onSuccess={onSuccess} />}
        {phase === 3 && <Yippie />}
      </header>
    </div>
  );
};

export default App;
