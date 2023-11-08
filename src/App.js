import './App.css';
import { useState } from 'react'; //Using a hook

function App() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const increment = () =>{
    // counter += 1;
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <div className="App">
      <h1> Counter is {counter}</h1>
      <button onClick={increment}>Click me to increment the counter </button>
    </div>
  );
}

export default App;
