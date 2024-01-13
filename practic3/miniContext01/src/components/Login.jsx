import React, {useState,useContext} from 'react';
import UserContext from "../context/UseContext.js";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
        console.log('test')
    }
    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
            {" "}
            <input
                type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;