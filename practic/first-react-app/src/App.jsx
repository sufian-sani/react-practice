import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import InputSection from "./components/InputSection.jsx";
import GetItems from "./components/GetItems.jsx";
import ButtonElement from "./components/ButtonElement.jsx";

function App() {

    // let itemIs = [];
    // let variable = "";
    const [item, setItem] = useState([])
    const [newTodo, setNewTodo] = useState('');
    const handleOnChange = (event) => {
        setItem(event.target.value)
        // console.log(variable)
    }

    const handleOnClickAddButton = (event) => {
        // itemIs.push(variable)
        // console.log(item)
        setItem([...item,newTodo])
    }

  return (
    <>
        <InputSection handleOnChange={handleOnChange} />
        <ButtonElement handleOnClickAddButton={handleOnClickAddButton} />
        <GetItems items={item} />
    </>
  )
}

export default App
