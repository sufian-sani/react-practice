import React from 'react';
import InputElement from "../Element/InputElement.jsx";

const InputManage = (props) => {
    let passItems={
        'type':'text',
        'placeholder':"Add a new todo",
    }
    return (
            <InputElement passItems={passItems} eventOperation={props.onChange} initialVal={props.initialVal} />
    );
};

export default InputManage;