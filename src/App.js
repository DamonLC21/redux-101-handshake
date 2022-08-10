import { useState } from 'react';
import './App.css';

function App(props) {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <h2>Current count: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
