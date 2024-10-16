import React, { useRef } from 'react';

const UseRef = () => {
  const refId = useRef<HTMLInputElement | null>(null);

  const ClickRef = () => {
    console.log(refId.current?.value, 'refId');
  };

  return (
    <div>
      <input type='text' ref={refId} />
      <button onClick={ClickRef}>Click Me</button>
    </div>
  );
};

export default UseRef;
