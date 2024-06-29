import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function BlogCards({title, description, image, username, id, isUser}) {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/blog-details/${id}`);
    }
    const handleDelete = async () => {
        try {
            const {data} = await axios.delete(`http://localhost:8080/api/v1/blog/delete-blog/${id}`);
            if(data.success){
                alert('Blog Deleted successfully.');
                window.location.reload();
            }
        }catch (error){
            console.log(error)
        }
    }
    return (
        <div>
            <h2>Title:{title}</h2>
            <p>Description: {description}</p>
            <img src={image} alt=""/>
            <p>{username}</p>
            {
                isUser && (
                    <>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </>
                )
            }
            <hr/>
        </div>
    );
}

export default BlogCards;