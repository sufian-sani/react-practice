import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h4>My Blog App</h4>
            <button LinkComponent={Link} to="/blogs" >Home</button>
            <button LinkComponent={Link} to="/login" >Login</button>
            <button LinkComponent={Link} to="/register" >Register</button>
            <button>Logout</button>
        </div>
    );
};

export default Header;