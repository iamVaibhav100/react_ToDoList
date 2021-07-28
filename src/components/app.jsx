import { useState } from "react";
import React from 'react';
import TodoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
    const [items, setItems] = useState([]);

    function clicked(inputText) {
        setItems((prevValue) => {
            return [...prevValue, inputText];
        });
    }

    function deleteItems(id) {
      setItems(prevItems => {
        return prevItems.filter((item, index) => {
          return index !== id;
        });
      });
    }


    return (
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <InputArea
          onAdd = {clicked}></InputArea>
          <div>
            <ul>
              {items.map((todoItem, index) => (
                <TodoItem 
                key = {index}
                id = {index}
                text = {todoItem}
                onChecked = {deleteItems}></TodoItem>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default App;