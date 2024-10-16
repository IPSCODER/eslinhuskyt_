import React, { useState } from 'react';

const UseState = () => {
  const [state, setState] = useState('');

  const clickMe = () => {
    if (state === 'changed') {
      setState('');
    } else {
      setState('changed');
    }
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={clickMe}>Click Me</button>
    </div>
  );
};

export default UseState;
