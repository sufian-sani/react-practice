import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div>
      <h1 style={{backgroundColor: color}}>Test</h1>
      <button onClick={()=>setColor("red")}>red</button>
    </div>
  )
}

export default App
