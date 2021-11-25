import React from 'react';
import withCounter from './withCounter';

let getT = (t) => {
  console.log(t);
  return t ? t : '';
};
const TextCounter = ({ count, incrementCounter }) => {
  const handleChange = (text) => {
    getT(text);
    incrementCounter();
  };
  return (
    <>
      <input
        placeholder="Enter text"
        id="test"
        onChange={(e) => handleChange(e.target.value)}
      />
      <span> {count} no of characters</span>
    </>
  );
};
export default withCounter(TextCounter, getT());
