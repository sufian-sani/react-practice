import React from 'react';
import {useParams} from "react-router-dom";

function User(props) {
    const {userid} = useParams()
    return (
        <div>
            <h1>User: {userid}</h1>
        </div>
    );
}

export default User;