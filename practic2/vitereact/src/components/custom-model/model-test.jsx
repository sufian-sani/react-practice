import * as React from 'react';
import {useState} from "react";
import Model from "./model.jsx";

export function ModelTest() {
    const [openModel, setOpenModel] = useState(false)
    console.log(openModel)
    return (
        <div>
            <button onClick={()=>setOpenModel(!openModel)}>Open Model Popup</button>
            {
                openModel ? <Model /> : null
            }
        </div>
    );
};