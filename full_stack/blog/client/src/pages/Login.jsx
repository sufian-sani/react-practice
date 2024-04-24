import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {useDispatch} from "react-redux";
import {authActions} from "../redux/store.js";

const Login = () => {
    const [inputs, setInputs] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post('http://localhost:8080/api/v1/user/login', {email: inputs.email, password: inputs.password})
            if(data.success){
                localStorage.setItem('userId', data?.user._id);
                dispatch(authActions.login())
                alert("User login Successfully");
                navigate('/');
            }
        }catch(error){

        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='email' value={inputs.email} onChange={handleChange} name="email" />
                <input type="password" placeholder='password' value={inputs.password} onChange={handleChange} name="password" />
                <button>Login</button>
                <button onClick={()=>navigate("/register")} >Not a user ? Please Register</button>
            </form>
        </div>
    );
};

export default Login;