import React from 'react';
import SocialButtons from './SocialButtons';

 const SideNavFooter = () => {
    return (
        <div className="Footer">
            <h3>Contact</h3>
            <p>Feel free to send me a <a href="mailto:qiusheng95@gmail.com">Mail</a></p> or reach out to me on social media.
            <SocialButtons/>
        </div>
    );
}
export default SideNavFooter;
