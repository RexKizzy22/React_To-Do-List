import React from "react";

function TodoItem(props) {
  return (
    <li
      onClick={() => {
        return props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
