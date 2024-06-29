import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const id = useParams().id
    const [inputs, setInputs] = useState({})
    const navigate = useNavigate();
    
    const getBlogDetails = async () => {
      try {
        const {data} = await axios.get(`http://localhost:8080/api/v1/blog/get-blog/${id}`);
        if(data.success){
            setBlog(data.blog)
            setInputs({
                title: data.blog.title,
                description: data.blog.description,
                image: data.blog.image,
            })
        }
      } catch (error){
          console.log(error)
      }
    }

    useEffect(() => {
        getBlogDetails();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // console.log(inputs)
            const {data} = await axios.put(`http://localhost:8080/api/v1/blog/update-blog/${id}`,{
                title:inputs.title,
                description:inputs.description,
                image:inputs.image,
                user:id,
            })
            if(data.success){
                alert("Blog Update Successfully");
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
        <div>
            <h1>Blog Details Edit</h1>
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default BlogDetails;