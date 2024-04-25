import React, {useEffect, useState} from 'react';
import axios from "axios";
import BlogCards from "../components/BlogCards.jsx";

const Blogs = () => {
    const [blogs, setblogs] = useState([])
    const getAllBlogs = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/blog/all-blog')
            if(data.success){
                setblogs(data.blogs)
            }
        }catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllBlogs()
    }, []);
    return (
        <div>
            {
                blogs && blogs.map((blog) => <BlogCards
                    id={blog?._id}
                    isUser={localStorage.getItem("userId") === blog?.user?._id}
                    title={blog.title}
                    description={blog.description}
                    image={blog.image}
                    username={blog?.user?.username}
                />)
            }
        </div>
    );
};

export default Blogs;