import React, {Component} from 'react';
import SideNavHeader from './SideNavHeader';
import SocialButtons from './SocialButtons';
import SideNavOptions from './SideNavOptions';
class SideNav extends Component{
    render(){
        return (
            <nav className="sidebar">
                <div className="sidebarContainer">
                    <SideNavHeader/>
                    <SideNavOptions/>
                    <SocialButtons/>
                </div>
            </nav>
        );
    }
}

export default SideNav;
