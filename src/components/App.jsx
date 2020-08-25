import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [newItems, setNewItems] = useState([]);

  function addItem(listItem) {
    setNewItems((prevValue) => [...prevValue, listItem]);
  }

  function deleteItem(id) {
    setNewItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} />
      <div>
        <ul>
          <li>A Item </li>
          {newItems.map((item, index) => (
            <TodoItem
              key={index}
              id={index}
              item={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
