import React, { useState } from "react";

function InputArea(props) {
  const [listItem, setListItem] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setListItem(value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={listItem} />
      <button
        onClick={() => {
          props.addItem(listItem);
          setListItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
