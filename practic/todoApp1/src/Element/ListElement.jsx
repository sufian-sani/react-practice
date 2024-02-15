import React from 'react';
import ButtonElement from "./ButtonElement.jsx";
const ListElement = (props) => {
    return (
        <li className={props.className}>
            {props.text}
            {props.removeButton}
            {props.edithandler}
            {props.enableDisableButton}
        </li>
    );
};

export default ListElement;