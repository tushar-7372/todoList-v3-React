import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    // console.log("id" + id);
    // adding filter function
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* todoItem is the value and index is the index of that value */}
          {items.map((todoItem, index) => (
            <ToDoItem
              id={index}
              key={index}
              onChecked={deleteItem}
              text={todoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
