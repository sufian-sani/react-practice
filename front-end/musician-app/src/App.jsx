import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MainApp from "./components/MainApp.jsx";
import MusicianList from './components/MusicianList.jsx';
import AlbumList from './components/AlbumList.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
          <Routes>
              <Route path="/" element={<MusicianList />} />  {/* Route for MusicianList at root */}
              <Route path="/albums" element={<AlbumList />} />  {/* Route for AlbumList at /albums */}
          </Routes>
      </Router>
  )
}

export default App
