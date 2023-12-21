import React, {useEffect, useState} from 'react';

function Github(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/sufian-sani')
            .then(res => res.json())
            .then(res => setData(res))
    }, []);
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                <h1>Github Followers: {data.followers}</h1>
                <img src={data.avatar_url} />
            </div>
            {/*<div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>*/}
            {/*    Github Followers: {data.avatar_url}*/}
            {/*</div>*/}
        </>
);
}

export default Github;