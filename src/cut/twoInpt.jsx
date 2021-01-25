import React, { useState } from "react"
import "./index.css"

const App = () => {

  const [name, setName] = useState();
  const [pswd, setPswd] = useState();
  const [finName, setFinName] = useState();
  const [finPswd, setFinPswd] = useState();


  const changeName = (e) => {
    setName(e.target.value);
  }

  const changePswd = (e) => {
    setPswd(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    setFinName(name);
    setFinPswd(pswd);
  }


  return (
    <>
      <div className="main_div">
        <form onSubmit={submit}>
          <div>
            <h1>HI {finName} {finPswd}</h1>
            <input
              onChange={changeName}
              placeholder="Enter text"
              defaultValue={name}
            />
          </div>
          <br />

          <input
            onChange={changePswd}
            placeholder="Enter text"
            defaultValue={pswd}
          />

          <br />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;