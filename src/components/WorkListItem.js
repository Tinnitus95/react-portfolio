import React, {Component} from 'react';


const WorkListItem = ({work}) => {
    console.log(work);
    return(
        <li className="workItem">
            <a><img src={work.img}></img></a>
            <h3>{work.name}</h3>
            <p>{work.text}</p>
            <a target="_blank" href={work.github}>Link to repository</a>
        </li>
    )
}


export default WorkListItem;
