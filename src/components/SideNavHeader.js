import React from 'react';


const SideNavHeader = (props) => {
    console.log(props);
    let currentTemp = props.weather ?
    (props.weather - 273.15).toFixed(1)
    :
        'Fetching weather...';

    return (
        <div className="header">
            <h1>Oscar Fredriksson</h1>
            <h3>Front End Developer</h3>
            <p>Student at KYH in Stockholm, Sweden. <br/>
            I'm a passionate Web Developer, with an unquenchable thirst for knowledge.<br/>
            Right now I'm focused on React, Redux and Sass.

        </p>
        <div className="weather">
            <p>Temperature in Stockholm is: {currentTemp}<span>&#8451;</span></p>
        </div>
    </div>
);
}
export default SideNavHeader;
