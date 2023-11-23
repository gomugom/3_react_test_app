import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
     <h3 data-testid="counter">
        {count}
     </h3>
     <button data-testid='minus-button' onClick={() => setCount(prev => prev -1)} disabled={disabled}>-</button>
     <button data-testid='plus-button' onClick={() => setCount(prev => prev + 1)} disabled={disabled}>+</button>
     <button onClick = {() => setDisabled(prev => !prev)} style={{backgroundColor: "blue"}} data-testid='on/off-button'>
      on/off
     </button>
    </div>
  );
}

export default App;
