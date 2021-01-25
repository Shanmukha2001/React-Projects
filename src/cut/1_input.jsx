import React, { useState } from "react"
import "./index.css"

const App = () => {

  const [name, setName] = useState();
  const [finName,setFinName] = useState();

  const changeName = (e)=>{
    console.log(name);
    setName(e.target.value);
  }

  const submit = () => {
    setFinName(name);
  }


  return (
    <>
      <div>
        <h1>HI {finName}</h1>
        <input
        onChange={changeName}
          placeholder="Enter text"
          defaultValue={name}
        />
        <button onClick={submit}>
          Submit
      </button>
      </div>
    </>
  );
}

export default App;