import React, {useState} from 'react';
import User from "./User.jsx";

function Index(props) {
    const [userName, setUserName] = useState('')
    const [userData, setUserData] = useState(null)

    // const response = await fetch(`https://api.github.com/users/${userName}`);
    async function fetchGithubUserData(){
        const response = await fetch(`https://api.github.com/users/${userName}`);
        if (!response.ok) {
            if (response.status === 403) {
                throw new Error('API rate limit exceeded. Please try again later.');
            } else {
                throw new Error('User not found');
            }
        }
        const data = await response.json();
        setUserData(data);
        setUserName('')
        // if (data) {
        //     console.log(data)
        //     setUserData(data);
        //     // setLoading(false);
        //     setUserName('')
        // }
        // console.log(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchGithubUserData()
    }

    return (
        <div>
            <h3>Github Profile Finder:</h3>
            <form action="" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="name">username:</label>
                <input
                    type="text"
                    id="name"
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                    required
                /><br/>
                <button type="submit">Submit</button>
            </form>
            <User/>
        </div>
    );
}

export default Index;