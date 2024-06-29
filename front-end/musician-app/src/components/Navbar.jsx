import {useState} from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { useAuth } from './AuthContext';

function Navbar(props) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize as false if user is not logged in
    //
    // const handleLogout = () => {
    //     // Perform logout actions (clear user authentication state, redirect user, etc.)
    //     console.log('test')
    //     setIsLoggedIn(false); // Update state to indicate user is logged out
    // };
    //
    // const handleLoginSuccess = () => {
    //     // Perform login logic (e.g., set isLoggedIn to true)
    //     setIsLoggedIn(true);
    // };
    const { loginStatus, logoutStatus } = props;
    const { sessionId } = useAuth();
    console.log(sessionId)


    return (
        <nav>
            User Data:{
                sessionId?
                    <Profile />
                : null
            }
            <hr/>

            <Link to="/">Musicians</Link>
            <span> | </span>
            <Link to="/albums">Albums</Link>
            <span> | </span>
            <Link to="/addmusician">Add Musician</Link>
            <span> | </span>
            <Link to="/addalbum">Add Album</Link>
            <span> | </span>
            {/*<Link to="/login">Login</Link>*/}
            {/*<Link to="/login">Login</Link>*/}
            {/* Other navbar items */}
            {sessionId ? (
                    <li>
                        <LogoutButton logoutStatus={logoutStatus} />
                    </li>

                ) :
                <li>
                    <Link to="/signup">Sign up</Link>
                    <span> | </span>
                    <Link to="/login" >Login</Link>
                </li>
            }
        </nav>
    );
}

export default Navbar;