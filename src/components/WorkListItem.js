import React, {Component} from 'react';


const WorkListItem = ({work}) => {
    // console.log(work);
    return(
        <li>
            <div className="workItem">
                <span>
                    <img src={work.img} alt={work.alt}></img>
                </span>
                <div>


                    <h3>{work.name}</h3>
                    <p>{work.text}</p>
                    { work.link ? <a target="_blank" href={work.link}>Live Demo</a> : null}
                    <a target="_blank" href={work.github}>Link to repository</a>
                </div>
            </div>
        </li>
    )
}


export default WorkListItem;
