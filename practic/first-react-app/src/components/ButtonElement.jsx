import React from 'react';

const ButtonElement = ({handleOnClickAddButton}) => {
    return (
        <button
            id="mybutton"
            onClick={handleOnClickAddButton}
        >
            A BUtton
        </button>
    );
};

export default ButtonElement;