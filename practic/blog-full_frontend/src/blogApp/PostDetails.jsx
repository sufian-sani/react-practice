import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function PostDetails({ match }) {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete post');
            }
            // Optionally: Redirect the user to another page after successful deletion
            navigate('/');
        } catch (error) {
            console.error('Error deleting post:', error);
            // Handle error
        }
    };

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post details');
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post details:', error.message);
            }
        };
        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default PostDetails;
