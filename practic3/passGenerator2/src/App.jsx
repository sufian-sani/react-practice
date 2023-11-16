import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  },[length,charAllowed,numberAllow])

  useEffect(() => {
    passGenerator()
  }, [length, numberAllow, charAllowed, passGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
     <h1>Password Generator</h1>
     <input 
        type="text"
        value={password}
        readOnly
        ref={passwordRef}
      />
      <button
        onClick={copyPasswordToClipboard}
      >copy</button>
     <input 
        type="range"
        min={8}
        max={50}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
     />
     <input 
        type="checkbox"
        onChange={()=>setNumberAllow((prev)=>!prev)}
      />
     <label>Allow Number</label>
     <input 
        type="checkbox"
        onChange={()=>setCharAllowed((prev)=>!prev)}
      />
     <label>Allow Special Chacter</label>
     <br /><br />
     <button onClick={passGenerator}>Generator</button>

    </>
  )
}

export default App
