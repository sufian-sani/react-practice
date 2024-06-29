import React,{useState,useEffect} from 'react';
import BlogCards from "../components/BlogCards.jsx";
import axios from "axios";

const UserBlogs = () => {
    const [blogs, setBlogs] = useState([])

    const getUserBlogs = async () => {
        try {
            const id = localStorage.getItem("userId");
            const { data } =await axios.get(`http://localhost:8080/api/v1/blog/user-blog/${id}`);
            if(data.success){
                setBlogs(data.userBlog.blogs)
            }
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getUserBlogs();
    },[])

    return (
        <div>
            <h1>Users Blogs:</h1>
            {
                blogs && blogs.length > 0 ? (blogs.map((blog) => (
                    <BlogCards
                        id={blog._id}
                        isUser={true}
                        title={blog.title}
                        description={blog.description}
                        image={blog.image}
                        username={blog.user.username}
                    />
                ))) : (<h1>No Blog</h1>)}
        </div>
    );
};

export default UserBlogs;