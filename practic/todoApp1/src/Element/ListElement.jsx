import React from 'react';
import ButtonElement from "./ButtonElement.jsx";
const ListElement = (props) => {
    return (
        // <ul>
        //     {props.listItem.map((todo,index) => (
        //         <li key={index}>{todo.text} {props.removeButtonComponents}</li>
        //     ))}
        // </ul>
        <li>
            {props.text}
            {/*<button onClick={()=>props.removeButtonComponents}>Remove</button>*/}
            <ButtonElement eventOperation={props.edithandler} innerHtmlText={'Edit'} />
            <ButtonElement eventOperation={props.removeButtonComponents} innerHtmlText={'Remove'} />
        </li>
    );
};

export default ListElement;