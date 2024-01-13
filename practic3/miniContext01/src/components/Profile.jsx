import React,{useContext} from 'react';
import UserContext from "../context/UseContext.js";

function Profile() {
    const {user} = useContext(UserContext)
    console.log(user)
    if (!user) return <div>please login</div>
    return (
        <div>
            Welcome {user.username}
            <br/>
            Password: {user.password}
        </div>
    )
}

export default Profile;