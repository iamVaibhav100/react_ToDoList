import React from 'react';
import { useState } from "react";

function InputArea(props) {
    const [inputText, setInput] = useState("");

    function change(event) {
        const newInput = event.target.value;
        setInput(newInput);
    }

    return (
        <div className="form">
            <input onChange={change} type="text" value={inputText} />
            <button onClick={() => {
                props.onAdd(inputText);
                setInput("");
            }}>
              <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea;