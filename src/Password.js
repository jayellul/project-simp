import React from 'react';
import './Password.css';

const password = 'pikachu';

export const Password = ({ onSuccess }) => {
  const [input, setInput] = React.useState('');
  const [attempts, setAttempts] = React.useState(0);

  const remainingAttempts = 3 - attempts;
  const showHint = attempts === 2;

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = () => {
    if (input.toLowerCase() === password) {
      onSuccess();
    } else {
      setAttempts(attempts + 1);
    }
  };
  return (
    <div className="password">
      {attempts >= 3 && <p>You can refresh and try again baby ;)</p>}
      {attempts < 3 && (
        <div>
          <p>Enter the password:</p>
          <div>
            <input className="password-input" onChange={onChange} />
          </div>
          <button className="password-submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      )}
      <p className="password-hint">Remaining attempts: {remainingAttempts}</p>
      {showHint && (
        <p className="password-hint">
          Hint: Name of our first biological child
        </p>
      )}
    </div>
  );
};

export default Password;
