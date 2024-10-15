import React, { useState } from 'react';

function Counter({ initialCount }) {
  // Using state to manage the count value
  const [count, setCount] = useState(initialCount);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Initial Count (from props): {initialCount}</p>
      <p>Current Count (from state): {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Passing the initial count via props */}
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
