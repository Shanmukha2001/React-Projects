import React, { useEffect, useState } from "react"

const App = () => {

  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `you clicked me ${num} times`;
  })

  return (
    <>
      <button onClick={() => {
    setNum(num + 1)
  }}>
        Click me {num}
      </button>
    </>
  )
}

export default App;