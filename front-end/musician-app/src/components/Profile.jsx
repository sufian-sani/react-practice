// Profile.js

import React from 'react';

function Profile() {
    // Retrieve user data from session storage
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    console.log(userData)

    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {userData.username}</p>
            {/* Display other user data */}
        </div>
    );
}

export default Profile;
