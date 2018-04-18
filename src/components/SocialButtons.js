import React from 'react';
import FontAwesome from 'react-fontawesome';
// const FontAwesome = require('react-fontawesome');

const SocialButtons = () => {
    return (
        <div className="flex-container">
            <a className='social-icon'>
                <FontAwesome

                    name='github'

                />
            </a>
            <a className='social-icon'>
                <FontAwesome

                    name='linkedin'
                    
                />
            </a>
            <a className='social-icon'>
                <FontAwesome

                    name='facebook'
                    
                />
            </a>


        </div>
    );
}

export default SocialButtons;
