import React from 'react';
import './CutesyFartsy.css';
import otter from './img/otter.gif';
import cafenone from './img/cafenone.webp';
import gordon from './img/gordon.gif';
import saltlake from './img/saltlake.jpg';
import listening from './img/listening.jpeg';

export const CutesyFartsy = ({ onSuccess }) => {
  const [noClicked, setNoClicked] = React.useState(false);

  return (
    <div className="cutesy">
      <div className="cutesy-list">
        <h1>For Adela 💗</h1>
        <p>Hey babygirl...</p>
        <p>These are some things I want to do for you as your girlfriend:</p>

        <div className="promise">
          <h2>Endless otter time 🦦</h2>
          <img src={otter} />
          <p>this is literally us</p>
        </div>
        <div className="promise">
          <h2>I'll always make you laugh</h2>
          <img src={cafenone} />
          <p>bouncing off the walls</p>
        </div>
        <div className="promise">
          <h2>And be your personal chef 👩‍🍳</h2>
          <img src={gordon} />
          <p>needs more garlic</p>
        </div>
        <div className="promise">
          <h2>Go on adventures together</h2>
          <img src={saltlake} />
          <p>let's travel</p>
        </div>
        <div className="promise">
          <h2>Always be there for you 👂</h2>
          <img src={listening} />
          <p>tell me about your day baby</p>
        </div>
        <div className="promise">
          <h2>Diddles 👀</h2>
          <p>...</p>
          <p>(iykyk)</p>
        </div>
        <hr />
        <p style={{ textAlign: 'center' }}>
          <br />
          How about we make it official...
          <br />
          Will you be my girlfriend?
        </p>

        <div className="buttons">
          <button className="yes" onClick={onSuccess}>
            Yes!!
          </button>
          <button className="no" onClick={() => setNoClicked(true)}>
            {noClicked ? 'Bruh' : 'No.'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CutesyFartsy;
