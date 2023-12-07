import React, {useEffect, useState} from 'react';

function Github() {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/sufian-sani')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setApiData(data)
            })

    }, []);
    return (
        <div>
            Github: {JSON.stringify(apiData)}
        </div>
    );
}

export default Github;