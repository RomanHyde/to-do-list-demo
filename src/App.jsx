
import './App.css';
import React, {useState} from "react";

function App() {

  const [userInput, setUserInput] = useState("");
  return (
<div>
  <h1>To-do app</h1>
  <input 
  type="text" 
  onChange={(e) => setUserInput(e.target.value)} />
  <button>Submit</button>
  <h4>{userInput}</h4>
<ul>
  <li>it 1</li>
  <li>it 2</li>
  <li>it3</li>
</ul>
</div>
  );
}

export default App;
