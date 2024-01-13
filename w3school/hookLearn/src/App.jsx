import { useState,createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component2 from "./component/Component2.jsx";


export const UserContext = createContext()
function App() {

    const [user, setUser] = useState("Jesse Hall");

  return (
      <UserContext.Provider value={user}>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 />
      </UserContext.Provider>
  )
}

export default App
