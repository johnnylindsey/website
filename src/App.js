
import './App.css';
import {useState} from "react";

function App() {

  let [txt, setTxt] = useState("site under construction - busy with school");

  /*
  let clickCount = 0;
  let [click, setClick] = useState("tap here");

  const phrases = ["is the best", "is amazing", "loves cookout", "is truly the best", "knows absolutely nothing", "can cook", "is Italian", "built this site", "loves rihanna",
                  "plays minecraft occasionally", "will finish this by xmas", "can no longer listen to travis scott", "loves kid cudi", "goes to uva", "owns a hamster",
                  "is moving to san francisco", "is bad at c++", "is struggling to come up with phrases", "prefers chicken parmesan", "prefers rigatoni", "is doing homework",
                  "likes pho", "likes korean food", "likes empanadas", "is tired", "is sad", "is happy", "drank a red bull", "doesnt understand"];

  function changeText() {
    clickCount++;

    if(clickCount >= 1 && click !== "tap here again"){
      setClick("tap here again");
    }

    let rand = Math.floor(Math.random() * phrases.length);
    
    setTxt("Johnny Lindsey " + phrases[rand]);
  }
*/

  function displayAbout(){
    //setTxt("");
  }

  function displayProjects(){
    //setTxt("");
  }

  function displayResume(){
    //setTxt("");
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Johnny Lindsey</h1>

        <nav>
          <button className="navButton" onClick={displayAbout}>About</button>
          <button className="navButton" onClick={displayProjects}>Projects</button>
          <button className="navButton" onClick={displayResume}>Resumé</button>
        </nav>

        <p class="textBlock">{txt}</p>
      </header>
      
    </div>
  );
}

export default App;
