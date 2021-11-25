import React from 'react';
import withCounter from './withCounter';
const HoverCounter = ({ count, incrementCounter }) => {
  return <p onMouseOver={incrementCounter}>Hovered {count} times</p>;
};
export default withCounter(HoverCounter);