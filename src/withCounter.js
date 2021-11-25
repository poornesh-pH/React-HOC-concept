import React, { useState } from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
  const NewComponent = (props) => {
    const [count, SetCount] = useState(0);
    const incrementCounter = () => {
      SetCount((count) => (count = count + (incrementNumber || 1)));
    };
    return (
      <WrappedComponent
        count={count}
        incrementCounter={incrementCounter}
        {...props}
      />
    );
  };
  return NewComponent;
};
export default withCounter;
