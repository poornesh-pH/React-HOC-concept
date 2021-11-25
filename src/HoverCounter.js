import React from 'react';
import withCounter from './withCounter';
const HoverCounter = ({ count, incrementCounter }) => {
  return (
    <>
      <p onMouseOver={incrementCounter}>
        Hovered {count} times <span>Condition 2</span>
      </p>
    </>
  );
};
export default withCounter(HoverCounter, 2);
