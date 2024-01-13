import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BgComponents from "./BgComponents.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BgComponents />
    </>
  )
}

export default App
