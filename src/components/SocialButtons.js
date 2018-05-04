import React from 'react';
import FontAwesome from 'react-fontawesome';
// const FontAwesome = require('react-fontawesome');

const SocialButtons = () => {
    return (
        <div className=" socialContainer">
            <a className='social-icon git' target="_blank" href="https://github.com/Tinnitus95">
                <FontAwesome
                    name='github'
                />
            </a>
            <a className='social-icon li' target="_black" href='https://www.linkedin.com/in/oscar-fredriksson1995'>
                <FontAwesome
                    name='linkedin'
                />
            </a>
            <a className='social-icon fac'>
                <FontAwesome
                    name='facebook'
                />
            </a>


        </div>
    );
}

export default SocialButtons;
