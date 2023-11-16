import React from 'react';
import { createContext, useContext } from "react";
import {UserContext} from './Usecontext2'

const Com1_5 = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Component 5</h1>
            <h2>{`Hello ${user.user} again!`}</h2>
        </div>
    );
};

export default Com1_5;