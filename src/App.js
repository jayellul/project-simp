import React from 'react';
import logo from './logo.svg';
import './App.css';
import Password from './Password';
import CutesyFartsy from './CutesyFartsy';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const onSuccess = () => {
    setLoggedIn(true);
  };

  const getBg = () => {
    if (!loggedIn) {
      return '#141414';
    }
    if (loggedIn) {
      return '#FFBBEC';
    }
  };
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: getBg() }}>
        {!loggedIn && <Password onSuccess={onSuccess} />}
        {loggedIn && <CutesyFartsy />}
      </header>
    </div>
  );
};

export default App;
