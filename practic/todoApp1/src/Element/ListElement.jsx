import React from 'react';

const ListElement = (props) => {
    return (
        <ul>
            {props.listItem}
        </ul>
    );
};

export default ListElement;