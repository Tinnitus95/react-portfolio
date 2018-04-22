import React from 'react';


const ToolsListItem = ({tool}) => {
    return (
        <li>
            <img src={tool.img}></img>
            <h3>{tool.name}</h3>
            <p>{tool.text}</p>
        </li>
    );
}

export default ToolsListItem;
