import React, { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
