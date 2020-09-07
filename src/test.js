import React, { useState, useEffect, useCallback } from 'react';

import './App.css';


const Button = ({ styleClass, text, ...rest}) => {
  console.log('rendered');
  return (<button {...rest}>{text}</button>)
};

function Test() {
  const [timer, updateTimer] = useState(0);
  let ct = 0;

  const update = useCallback((e) => {e.preventDefault(); console.log(e)}, []);

  useEffect(() => {
    const t = timer + 1;
    clearTimeout(ct)
    ct = setTimeout(() => updateTimer(t), 1000);
  }, [timer]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React { timer }
          <Button
            text="Hello World"
            onClick={update}
          />
           <Button
            text="Nayee Duniya "
            onClick={update}
          />
        </a>
      </header>
    </div>
  );
}

export default Test;