import React from 'react';


const CommentsItem = ({comment}) => {
    return (
        <li className="workItem">
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
        </li>
    );
}

export default CommentsItem;
