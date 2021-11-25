import React from 'react';
import withCounter from './withCounter';
const ClickCounter = ({ count, incrementCounter}) => {
  return (
    <button onClick={incrementCounter}>
      Clicked {count}times
    </button>
  );
};
export default withCounter(ClickCounter);