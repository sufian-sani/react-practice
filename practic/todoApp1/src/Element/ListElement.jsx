import React from 'react';
import ButtonElement from "./ButtonElement.jsx";
const ListElement = (props) => {
    return (
        <li>
            {props.text}
            {props.removeButton}
            {props.edithandler}
        </li>
    );
};

export default ListElement;