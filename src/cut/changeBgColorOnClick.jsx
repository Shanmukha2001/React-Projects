import React, { useState } from "react"
import "./index.css";

const App = () => {

  let color = "rgb(145, 5, 145)";

  const [prColor,nexColor] = useState(color);
  const [prText,nxtText] = useState("click me!");

  const change = () =>{
      nexColor("#fff");
      nxtText("Ouch! :angry:");
  };

  const changeBack = () =>{
    nexColor(color);
    nxtText("Broken!");
  }
  
  return (
  <>
    <div style={{ backgroundColor:prColor }} >
      <button onClick={change} onDoubleClick={changeBack}>
        {prText}
      </button>
    </div>
  </>

  )
};

export default App;