import React, {useState} from 'react';
import CheckTypeComponents from "../Element/CheckTypeComponents.jsx";
import LabelManager from "./LabelManager.jsx";

const EnableDisableManager = (props) => {

    return (
        <>
            {/*<CheckTypeComponents eventOperation={props.disablehandler} status={props.status} />*/}
            {/*<CheckTypeComponents eventOperation={props.disablehandler} checked={props.status?'true':'false'} />*/}
            <CheckTypeComponents eventOperation={props.disablehandler} status={props.status} />
            <LabelManager labelText={'Disable'} />
        </>
    );
};

export default EnableDisableManager;