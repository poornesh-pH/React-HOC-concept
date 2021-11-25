import React, { useState } from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
  const NewComponent = (props) => {
    const [count, SetCount] = useState(0);
    console.log(incrementNumber, 'incrementNumber check');
    console.log(count, 'count check');
    const incrementCounter = () => {
      SetCount((count) => {
        switch (typeof incrementNumber) {
          case 'number':
            count = count + incrementNumber;
            console.log('number 2', incrementNumber, count);
            break;
          case 'string':
            // count = incrementNumber.length;
            console.log('string typed', incrementNumber);
            break;
          case 'undefined':
            // count = count + 1;
            console.log('click', incrementNumber, count);
            break;
        }
      });
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
