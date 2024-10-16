import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    let x = setTimeout(() => {
      setState(state + 1);
    }, 1000);
    return () => clearTimeout(x);
  }, [state]);

  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
};

export default UseEffect;
