import {useAuth} from "../contexts/AuthContext";
import {Routes, Route, Navigate} from "react-router-dom";

export default function PrivateRoute({component: Component, ...rest}){
        const {currentUser} = useAuth();
        return currentUser ? (
            <Routes>
                <Route {...rest}>{(props => <Component {...props} />)}</Route>
            </ Routes>
        ):(
            // <Navigate to="/login" />
        )
}