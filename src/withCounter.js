import React, { useState } from 'react';

const withCounter = (WrappedComponent) => {
  const NewComponent = () => {
    const [count, SetCount] = useState(0);
    const incrementCounter = () => {
      SetCount((count) => (count = count + 1));
    };
    return (
      <WrappedComponent count={count} incrementCounter={incrementCounter} />
    );
  };
  return NewComponent;
};
export default withCounter;
