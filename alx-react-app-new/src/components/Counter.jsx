import { useState } from 'react';

function Counter() {
  // Initialize state
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '20px',
        width: '200px',
        margin: '20px auto',
        textAlign: 'center',
        borderRadius: '5px',
        backgroundColor: '#f0f0f0'
      }}
    >
      <h2>Counter App</h2>
      <p style={{ fontSize: '20px', margin: '10px 0' }}>Current Count: {count}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
