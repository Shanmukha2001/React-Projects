import React, { useState } from "react"
import "./index.css"

const App = () => {

  const [finName, setFinName] = useState({
    fname: '',
    lname: '',
    mail: '',
    phno: ''
  });

  const changeName = (e) => {
    // console.log("val " + e.target.value);
    // console.log("name " + e.target.name);

    const value = e.target.value
    const name = e.target.name

    setFinName((prevValu) => {
      if ((name) === "fname") {
        return {
          fname: value,
          lname: prevValu.lname,
          mail: prevValu.mail,
          phno: prevValu.phno
        };
      } else if ((name) === "lname") {
        return {
          fname: prevValu.fname,
          lname: value,
          mail: prevValu.mail,
          phno: prevValu.phno
        };
      } else if ((name) === "mail") {
        return {
          fname: prevValu.fname,
          lname: prevValu.lname,
          mail: value,
          phno: prevValu.phno
        };
      } else if ((name) === "phno") {
        return {
          fname: prevValu.fname,
          lname: prevValu.lname,
          mail: prevValu.mail,
          phno: value
        };
    }
  });
  }

  const submit = (e) => {
    e.preventDefault();
    alert("Submitted");
  }


  return (
    <>
      <div className="main_div">
        <form onSubmit={submit}>
          <div>
            <h1>HI {finName.fname} {finName.lname} </h1>
            <p>{finName.mail}</p>
            <p>{finName.phno}</p>
            <input
              name="fname"
              type="text"
              onChange={changeName}
              placeholder="Enter Your Name"
              value={finName.fname}
              autoComplete="off"
            />
          </div>

          <div>
            <input
              name="lname"
              type="text"
              onChange={changeName}
              placeholder="Enter Your Last Name"
              value={finName.lname}
              autoComplete="off"
            />
          </div>

          <div>
            <input
              name="mail"
              type="email"
              onChange={changeName}
              placeholder="Enter Your Mail"
              value={finName.mail}
              autoComplete="off"
            />
          </div>

          <div>
            <input
              name="phno"
              type="tel"
              onChange={changeName}
              placeholder="Enter Your PhoneNum"
              value={finName.phno}
              autoComplete="off"
            />
          </div>
          <br />
          <button type="submit">
            Submit 👍
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
