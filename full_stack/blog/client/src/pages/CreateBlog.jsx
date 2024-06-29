import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import {useSelector} from "react-redux";

const CreateBlog = () => {
    const navigate = useNavigate();
    const id = localStorage.getItem("userId");
    const [inputs, setInputs] = useState({
        title:'',
        description:'',
        image:''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // console.log(inputs)
            const {data} = await axios.post('http://localhost:8080/api/v1/blog/create-blog',{
                title:inputs.title,
                description:inputs.description,
                image:inputs.image,
                user:id,
            })
            if(data.success){
                alert("Blog Created Successfully");
                navigate('/my-blog')
            }
        }catch(error){
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setInputs((prevState)=>({...prevState, [e.target.name]: e.target.value}))
    }

    return (
        <>
            <h1>Create Blog Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={inputs.title}
                    placeholder="Title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    value={inputs.description}
                    placeholder="Description"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="image"
                    value={inputs.image}
                    placeholder="Image"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default CreateBlog;