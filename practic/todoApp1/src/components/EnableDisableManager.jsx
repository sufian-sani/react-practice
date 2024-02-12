import React, {useState} from 'react';
import CheckTypeComponents from "../Element/CheckTypeComponents.jsx";
import LabelManager from "./LabelManager.jsx";

const EnableDisableManager = (props) => {

    return (
        <>
            <CheckTypeComponents eventOperation={props.disablehandler} />
            <LabelManager labelText={'Disable'} />
        </>
    );
};

export default EnableDisableManager;