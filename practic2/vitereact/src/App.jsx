import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import According from "./components/accordian/index.jsx";
import According2 from "./components/accordian2/index.jsx";
import RandomColor from "./components/random-color/index.jsx";
import RandomColor2 from "./components/random-color2/RandomColor2.jsx";

function App() {

  return (
    <div>
      {/*<According />*/}
      {/*<According2 />*/}
      {/*  <RandomColor />*/}
        <RandomColor2 />
    </div>
  );
}

export default App
