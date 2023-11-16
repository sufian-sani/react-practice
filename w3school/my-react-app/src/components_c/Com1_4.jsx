import React from 'react';
import { createContext, useContext } from "react";
import Com1_5 from './Com1_5';
import {UserContext} from './Usecontext2'

const Com1_4 = () => {
    const username = useContext(UserContext);
    console.log(username.username);
    return (
        <div>
            <h1>Component 4</h1>
            <h2>{username.username}</h2>
            <Com1_5 />
        </div>
    );
};

export default Com1_4;