import React, {Component} from 'react';
import SideNavHeader from './SideNavHeader';

import SideNavFooter from './SideNavFooter';
import SideNavOptions from './SideNavOptions';

const API_KEY = 'e8fed75c765bc183cc0bf22d745d8c10';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?q=Stockholm,swe&appid=${API_KEY}`;


class SideNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: []
        }
    }
    componentDidMount(){
        fetch(ROOT_URL)
        .then(response => response.json())
        .then(data => this.setState({ weather: data.main.temp }));
    }
    render(){
        console.log(this.state.weather);
        return (
            <nav className="sidebar">
                <div className="sidebarContainer">
                    <SideNavHeader weather={this.state.weather}/>
                    <SideNavOptions/>
                    <SideNavFooter/>
                </div>
            </nav>
        );
    }
}

export default SideNav;
