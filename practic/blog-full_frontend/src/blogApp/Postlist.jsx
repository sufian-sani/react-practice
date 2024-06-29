import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Postlist({ post }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error.message);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2><Link to={`/${post.id}`}>{post.title}</Link></h2>
                        <p>{post.content}</p>
                        <p>Author: {post.author}</p>
                    </li>
                ))}
            </ul>
            <Link to="/create-post">Create New Post</Link>
        </div>
    );
}

export default Postlist;
