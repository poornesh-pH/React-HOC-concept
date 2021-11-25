import React from 'react';
import withCounter from './withCounter';
const ClickCounter = ({ count, incrementCounter, author }) => {
  return (
    <>
      <button onClick={incrementCounter}>Clicked {count} times</button>
      <span style={{ paddingLeft: 10 }}>
        {author} - <small>Condition 1</small>
      </span>
    </>
  );
};
export default withCounter(ClickCounter);
