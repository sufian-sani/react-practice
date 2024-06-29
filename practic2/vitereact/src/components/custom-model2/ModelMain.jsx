import React, {useState} from 'react';
import Model from "./Model.jsx";

function ModelMain(props) {
    const [modelState, setModelState] = useState(false)
    return (
        <div>
            <button onClick={()=>setModelState(!modelState)}>Open Model</button>
            {
                modelState ?
                    <Model />
                    :null
            }
        </div>
    );
}

export default ModelMain;