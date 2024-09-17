import React from 'react';
import logo from './logo.svg';
import './App.css';
import Password from './Password';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const onSuccess = () => {
    setLoggedIn(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        {!loggedIn && <Password onSuccess={onSuccess} />}
        {loggedIn && (
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to the secret area!</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
