import React from 'react';


const ToolsListItem = ({tool}) => {
    return (
        <li className="toolItem">
            <img className="toolImg" src={tool.img} alt={tool.alt}></img>

            <h3>{tool.name}</h3>
            <p>{tool.text}</p>

        </li>
    );
}

export default ToolsListItem;
