import React, { useEffect } from 'react';
import UseState from './UseState';
import UseRef from './UseRef';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../store/counterSlice';

const Home = () => {
  const state = useSelector((state: any) => state);

  console.log(state);

  const dispatch = useDispatch();

  useEffect(() => {
    let x = setTimeout(() => {
      dispatch(increment());
    }, 1000);

    return () => clearTimeout(x);
  }, [state.counter.value]);

  return (
    <div>
      <h1>{state.counter.value}</h1>
      <UseState />
      <UseRef />
      <UseEffect />
      <UseMemo number={1} />
    </div>
  );
};

export default Home;
