import React, {Component} from 'react';
import SideNavHeader from './SideNavHeader';

import SideNavFooter from './SideNavFooter';
import SideNavOptions from './SideNavOptions';
class SideNav extends Component{
    render(){
        return (
            <nav className="sidebar">
                <div className="sidebarContainer">
                    <SideNavHeader/>
                    <SideNavOptions/>
                    <SideNavFooter/>
                </div>
            </nav>
        );
    }
}

export default SideNav;
