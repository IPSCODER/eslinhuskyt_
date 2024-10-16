import React, { useContext, useMemo, useState } from 'react';
import { ContextProvider } from '../../App';

const UseMemo = ({ number }: any) => {
  const { change, setChange } = useContext<any>(ContextProvider);

  console.log('Computing...');
  const computeExpensiveValue = (num: any) => {
    return num * 2; // Example computation
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(number), [number]);

  return (
    <div>
      {change}
      <h1>Number: {number}</h1>
      <h2>Computed Value: {memoizedValue}</h2>
      <button onClick={() => setChange('setChange')}>chnage</button>
    </div>
  );
};

export default UseMemo;
