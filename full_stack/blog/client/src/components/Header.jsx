import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Header = () => {
    const isLogin = useSelector(state => state.isLogin)
    console.log(isLogin)
    return (
        <div>
            <h4>My Blog App</h4>

            {isLogin && (
                <button LinkComponent={Link} to="/blogs">Home</button>
            )}

            {!isLogin && (
                <>
                    <button LinkComponent={Link} to="/login">Login</button>
                    <button LinkComponent={Link} to="/register">Register</button>
                </>
            )}

            {isLogin && (
                <button>Logout</button>
            )}
        </div>
    );
};

export default Header;