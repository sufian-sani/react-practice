import React, {useCallback, useEffect, useState, useRef } from 'react';


const Forms = () => {
    let [password, setPassword] = useState("")
    let [length, setLength] = useState(6)
    let [number, setNumber] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false);

    const passwordRef = useRef(null)

    const passGenerator = useCallback(()=>{
            let pass = '';
            let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            let num = "0123456789"
            if(number){
                console.log(number)
                str = str+num
            }
            if (charAllowed){
                str += "!@#$%^&*-_+=[]{}~`"
            }

            for (let i = 1; i <= length; i++) {
                let char = Math.floor(Math.random() * str.length + 1);

                pass += str.charAt(char)
            }
            setPassword(pass)
    },[length,number, charAllowed])


    useEffect(() => {
        passGenerator()
        console.log(length)
        // console.log(number)
    }, [passGenerator,length,number,charAllowed]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 50);
        window.navigator.clipboard.writeText(password)
    }, [password])


    return (
        <div>
            <form>
                <input type="text" value={password} readOnly
                   ref={passwordRef}
                />
                <button type="button"
                        onClick={copyPasswordToClipboard}
                >copy</button>
                <input type="range" min={6} max={50} value={length}
                    onChange={(e)=>{setLength(e.target.value)}}
                />
                <input type="checkbox"
                       onChange={()=>setNumber((prev)=>!prev)}
               />
                <label>Number</label>
                <input type="checkbox"
                       onChange={()=>setCharAllowed((prev)=>!prev)}
                />
                <label>Chacter</label>
                <br />
                <br />
                <button type="button" onClick={passGenerator}>Generate Password</button>
            </form>
        </div>
    );
};

export default Forms;