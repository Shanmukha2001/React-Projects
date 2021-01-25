import React, { useState } from "react";
import ToDoItems from "./ToDoItems";

const App = () => {

  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const ChangeText = (e) => {
    setItem(e.target.value);
  }

  const showList = () => {
    setItems((prevItem) => {
      return [...prevItem, item]
    });
    setItem("");
  }

  const delItem = (p) => {
    setItems((prevItems) => {
      return prevItems.filter((x, y) => {
        return y !== p;
      });
    });
  }

  return (
    <>
      <div className="main-div">
        <div className="table">
          <h1>ToDo List</h1>
          <div className="intf">
            <input placeholder="Enter a Name" name="itemInp" value={item} onChange={ChangeText} /><button onClick={showList}>+</button>
          </div>
          <div>
            <ol>
              {/* <li>{item}</li> */}
              {items.map((itemval, index) => {
                return (
                  <ToDoItems name={itemval} id={index} key={index} onSelect={delItem} />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;