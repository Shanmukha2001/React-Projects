import React, { useState } from "react"

const App = () => {

  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prvNum) => {
      var num = prvNum + 1;
      return num;
    });
  }

  const decrement = () => {
    setNumber((prvNum) => {
      if(prvNum >0){
        var num = prvNum - 1;
      return num;
      }else{
        alert("Number reached 0");
        return prvNum;
      }
    });
  }

  return (
    <>
      <div className="main-div">
        <div className="number">
          <h1>
            {number}
          </h1>
        </div>
        <div className="btns">
          <div>
            <button className="incr" onClick={increment}>Increm</button>
          </div>
          <div>
            <button className="decr" onClick={decrement}>Decrem</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;