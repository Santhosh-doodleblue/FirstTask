import React, { useState } from "react";
import "./App.css";
function First() {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
  };
  const onRemove = () => {
    setCount(count - 1);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          {count >= 1 && (
            <button className="remove" onClick={onRemove}>
              -
            </button>
          )}
          <h1>{count}</h1>
          <button className="add" onClick={onAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default First;
