import React from 'react';

const CheckTypeComponents = (props) => {
    return (
        // <input type="checkbox" id="" name="" value="" className='mx-1 ms-3' onChange={props.eventOperation} checked={`${props.status?'checked':''}`}/>
        // <input type="checkbox" id="" name="" value="" className='mx-1 ms-3' onChange={props.eventOperation} ${props.status ?`checked` : ``} />
        // <input type="checkbox" id="" name="" value="" className='mx-1 ms-3' onChange={props.eventOperation} `${props.status?`checked`:``}` />
        // <input type="checkbox" id="" name="" value="" className='mx-1 ms-3' onChange={props.eventOperation} defaultChecked={`${props.status?'true':'false'}`} />
        <input type="checkbox" id="" name="" value="" className='mx-1 ms-3' onChange={props.eventOperation} defaultChecked={props.status} />
    );
};

export default CheckTypeComponents;