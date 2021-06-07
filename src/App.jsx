
import './App.css';
import React, { useState } from "react";
import Form from "./components/Form.jsx";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const handleForm = (userInput) => {
    // Note: To make sure there are no blank entries
    if (userInput.length > 0) {
        // Note: In setTodoItems
    // 1. tdoItems, 2. user input , 3.whatever is added in the 3rd place is added to the list after user input each time.
    setTodoItems([...todoItems, userInput]);
    }
  };
    return (
      <div>
        <h1>To-do app</h1>
        <Form  handleForm = {handleForm} />
        <ul>
          {todoItems.map((item,index) => {
              return <li ker={index}>{item}</li>;
              })}
        </ul>
      </div>
    );
};

export default App;