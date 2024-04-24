import React from 'react';

function BlogCards({title, description, image, username}) {
    return (
        <div>
            <h2>Title:{title}</h2>
            <p>{description}</p>
            <img src={image} alt=""/>
            <p>{username}</p>
            <hr/>
        </div>
    );
}

export default BlogCards;