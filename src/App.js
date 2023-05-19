import React, { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    setCount(count + 1);
  };
  const onDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>code-next-react-counter</h1>

      <h2>https://stackblitz.com/edit/code-next-react-counter</h2>

      <hr />

      <div>
        <h2>count : {count}</h2>

        <button
          className="btn btn-success"
          onClick={onIncrementClick}
          style={{marginRight: '9px' }}
        >
          increment
        </button>
        <button className="btn btn-warning" onClick={onDecrementClick}>
          decrement
        </button>
      </div>
    </div>
  );
};