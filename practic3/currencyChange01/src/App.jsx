import { useState } from 'react'
import './App.css'
import Form from "./components/Form.jsx";
import TestComponents from "./components/TestComponents.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Form />*/}
        <TestComponents />
    </>
  )
}

export default App
