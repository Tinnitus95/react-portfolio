import React, {Component} from 'react'

import SideNav from './SideNav';
import PageContent from './PageContent';


class Main extends Component{
    render(){
        return (
            <div className="flex-container">

                <SideNav/>
                <PageContent/>

            </div>
        );
    }
}

export default Main;
