import React from 'react';
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {authActions} from "../redux/store.js";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const isLogin = useSelector(state => state.isLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            dispatch(authActions.logout())
            alert("Logout Successfully")
            navigate('/login')
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <h4>My Blog App</h4>

            {isLogin && (
                <>
                    <Link to="/blogs">Home</Link>
                    <Link to="/my-blog">My Blogs</Link>
                </>
            )}

            {!isLogin && (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}

            {isLogin && (
                <button onClick={handleLogout} >Logout</button>
            )}
        </div>
    );
};

export default Header;