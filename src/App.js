
import './App.css';
import {useState} from "react";

function App() {

  const name = "Johnny Lindsey";
  let [counter, setCounter] = useState(0);

  function incCounter() {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <p>ill make this website soon</p>
        <br/>
        <button onClick={incCounter}>tap to say hi</button>
        <p>Hi count: {counter}</p>
      </header>
    </div>
  );
}

export default App;
