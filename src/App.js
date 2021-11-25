import React from 'react';
import './style.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import TextCounter from './TextCounter';
export default function App() {
  return (
    <div>
      <h3>React Playground (Higher Order Components)</h3>
      <ul>
        <li>
          Higher Order Component takes a component as an argument and returns a
          New/Updated Component.
        </li>
        <li>
          This can be used as reuseable components which has similar
          functionality
        </li>
        <li>const IronMan = withSuit(TonyStark)</li>
        <li>
          Condition 1: If you pass any value as props to a Component which is
          powered with HOC, the props will be passed to the HOC but not to the
          exact Component. To achieve this you need to manually send the props
          from the HOC component.{' '}
        </li>
        <li>
          Condition 2: You can pass an extra argument wile wrapping the
          Component with the HOC, you can use the value to modify as per the
          needs
        </li>
      </ul>
      <hr />
      {/* <ClickCounter author="Poornesh" /> */}
      <HoverCounter />
      {/* <TextCounter /> */}
    </div>
  );
}
