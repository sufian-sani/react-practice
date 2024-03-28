import {useState} from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function Navbar(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize as false if user is not logged in

    const handleLogout = () => {
        // Perform logout actions (clear user authentication state, redirect user, etc.)
        setIsLoggedIn(false); // Update state to indicate user is logged out
    };

    const handleLogin = () => {
        // Perform login logic (e.g., set isLoggedIn to true)
        setIsLoggedIn(true);
    };

    return (
        <nav>
            <Link to="/">Musicians</Link>
            <span> </span>
            <Link to="/albums">Albums</Link>
            <span> </span>
            <Link to="/signup">Sign up</Link>
            <span> </span>
            <Link to="/login">Login</Link>
            {/*<Link to="/login">Login</Link>*/}
            {/* Other navbar items */}
            {isLoggedIn ? (
                <li>
                    <LogoutButton onLogout={handleLogout} />
                </li>

                ) :
                    null
                }
        </nav>
    );
}

export default Navbar;