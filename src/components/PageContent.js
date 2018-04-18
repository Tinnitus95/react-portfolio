import React, {Component} from 'react';
import ContentHeader from './ContentHeader';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ContactContainer from './views/ContactContainer';
import GuestListContainer from './views/GuestListContainer';
import ToolsContainer from './views/ToolsContainer';
import WorkContainer from './views/WorkContainer';


class PageContent extends Component{
    render(){
        return (
            <div className="content-wrapper">
                <ContentHeader/>

                    <div>
                        <Switch>
                            <Route exact path="/" component={WorkContainer} />
                            <Route path="/tools" component={ToolsContainer} />
                            <Route path="/contact" component={ContactContainer}/>
                            <Route path="/guestlist" component={GuestListContainer}/>
                        </Switch>
                    </div>

            </div>
        );
    }
}


export default PageContent;
