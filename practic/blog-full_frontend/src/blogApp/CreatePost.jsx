import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function CreatePost() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: ''
    });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to create post');
            }
            // Redirect user or display success message
            // Redirect to post details page
            navigate('/'); // Assuming formData.id exists
        } catch (error) {
            console.error('Error creating post:', error);
            // Display error message to user
        }
    };

    return (
        <div>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea name="content" value={formData.content} onChange={handleChange} />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" name="author" value={formData.author} onChange={handleChange} />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
