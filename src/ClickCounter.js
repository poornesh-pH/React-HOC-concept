import React from 'react';
import withCounter from './withCounter';
const ClickCounter = ({ count, incrementCounter, something }) => {
  return (
    <>
      <button onClick={incrementCounter}>Clicked {count} times</button>
      <span style={{ paddingLeft: 10 }}>
        {something} - <small>Condition 1</small>
      </span>
    </>
  );
};
export default withCounter(ClickCounter,2);
