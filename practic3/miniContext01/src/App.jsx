import { useState } from 'react'
import './App.css'
import UseContextProvider from "./context/UseContextProvider.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <UseContextProvider>
      <h1>Test</h1>
        <Login />
      <Profile />
    </UseContextProvider>
  )
}

export default App
