import React from 'react';
import { useState, createContext } from "react";
import Com1_2 from './Com1_2';

export const UserContext = createContext();

const Usecontext2 = () => {
    const [user, setUser] = useState("Jesse Hall");
    const [username, setUsername] = useState("Jesse_Hall");
    return (
        <div>
            <UserContext.Provider value={{user,username}}>
                <h1>{`Hello ${user}!`}</h1>
                <Com1_2 />
            </UserContext.Provider>
        </div>
    );
};

export default Usecontext2;