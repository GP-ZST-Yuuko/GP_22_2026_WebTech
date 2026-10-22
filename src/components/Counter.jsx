import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);


  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Licznik: {count}</p>

      <button onClick={add}>
        +
      </button>

      <button onClick={subtract}>
        -
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;