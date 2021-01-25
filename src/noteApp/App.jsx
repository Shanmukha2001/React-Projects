import React from "react"
import Head from "./Head"
import Foot from "./Foot"
import NoteHolder from "./NoteHolder"
import "../index.css"

const App = () => {
  return (
  <>
    <Head/>
    <NoteHolder/>
    <Foot/>
  </>
  );
}

export default App;