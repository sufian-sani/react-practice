import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        name:'',
        email:'',
        password:''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
                [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post('http://localhost:8080/api/v1/user/register', {username: inputs.name, email: inputs.email, password: inputs.password})
            if(data.success){
                alert("User Register Successfully");
                navigate('/login');
            }
        }catch(error){

        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' value={inputs.name} onChange={handleChange} name="name" />
                <input type="text" placeholder='email' value={inputs.email} onChange={handleChange} name="email" />
                <input type="password" placeholder='password' value={inputs.password} onChange={handleChange} name="password" />
                <button>Submit</button>
                <button onClick={()=>navigate("/login")} >Already Registerd ? Please Login</button>
            </form>
        </div>
    );
};

export default Register;