import React from 'react';
import SocialButtons from './SocialButtons';

 const SideNavFooter = () => {
    return (
        <footer className="footer">
            <h3>Contact</h3>
            <p>Feel free to send me a <a href="mailto:qiusheng95@gmail.com">Mail</a> or reach out to me on social media.</p>
            <SocialButtons/>
        </footer>
    );
}
export default SideNavFooter;
