
import './App.css';
import {useState} from "react";

function App() {

  let clickCount = 0;
  let [txt, setTxt] = useState("Johnny Lindsey");
  let [click, setClick] = useState("tap here");

  const phrases = ["is the best", "is amazing", "loves cookout", "is truly the best", "knows absolutely nothing", "can cook", "is Italian", "built this site", "loves rihanna",
                  "plays minecraft occasionally", "will finish this by xmas", "can no longer listen to travis scott", "loves kid cudi", "goes to uva", "owns a hamster",
                  "is moving to san francisco", "is bad at c++", "is struggling to come up with phrases", "prefers chicken parmesan", "prefers rigatoni", "is doing homework",
                  "likes pho", "likes korean food", "likes empanadas", "is tired", "is sad", "is happy", "drank a red bull"];

  function changeText() {
    clickCount++;

    if(clickCount >= 1 && click !== "tap here again"){
      setClick("tap here again");
    }

    let rand = Math.floor(Math.random() * phrases.length);
    
    setTxt("Johnny Lindsey " + phrases[rand]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{txt}</h1>
        <a href="#" className="button1" onClick={changeText}>{click}</a>
      </header>

      
    </div>
  );
}

export default App;
