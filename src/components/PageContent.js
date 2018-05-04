import React, {Component} from 'react';
import ContentHeader from './ContentHeader';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import GuestListContainer from './views/GuestListContainer';
import ToolsContainer from './views/ToolsContainer';
import WorkContainer from './views/WorkContainer';
import CertificatesContainer from './views/CertificatesContainer';

class PageContent extends Component{
    constructor(props){
        super(props);
        this.state ={
            work: [
                {
                    name: 'Bi-dashboard',
                    img: './images/dashboard.png',
                    text: 'Dashboard made as a schoolproject for HeadAgent',
                    link: 'https://irdashboard.surge.sh/',
                    github: 'https://github.com/Tinnitus95/IRecommend-BI-Dashboard'
                },
                {
                    name: 'Nest:R',
                    img: './images/nestr.png',
                    text: 'Mobile geolocation game where you fight over the control of nests in your hometown',
                    link: 'https://nestr.surge.sh/',
                    github: 'https://github.com/Tinnitus95/Game_Kiwi'
                },
                {
                    name: 'React Weather forecast',
                    img: './images/weatherapp.png',
                    text: 'App built on the openweathermap API',
                    link: '',
                    github: 'https://github.com/Tinnitus95/react_weather_app'
                },
                {
                    name: 'Indecision',
                    img: './images/indecision.png',
                    text: 'Minimalistic todolist in React',
                    link: 'http://off-indecision.surge.sh/',
                    github: 'https://github.com/Tinnitus95/react_todo_list'
                },
                {
                    name: 'Color Game',
                    img: './images/color_game.png',
                    text: 'Small game to learn RGB codes',
                    link: 'http://off-colorgame.surge.sh/',
                    github: 'https://github.com/Tinnitus95/color_game'
                },
                
                {
                    name: 'Snake LMS',
                    img: './images/snake.png',
                    text: 'The first project I made! Mostly here to show my journey',
                    link: '',
                    github: 'https://github.com/Tinnitus95/Team-Snake'
                },

            ],
            tools:[
                {
                    name: "HTML-5",
                    img: './images/badges/html.svg'
                },
                {
                    name: "CSS",
                    img: './images/badges/css.svg'
                },
                {
                    name: "JavaScript",
                    img: './images/badges/js.svg'
                },
                {
                    name: "Sass",
                    img: './images/badges/sass.svg'
                },
                {
                    name: "React",
                    img: './images/badges/react.svg'
                },
                {
                    name: "Redux",
                    img: './images/badges/redux.svg'
                },
                {
                    name: "Node",
                    img: './images/badges/node.svg'
                },
                {
                    name: "MongoDB",
                    img: './images/badges/MongoDB.svg'
                },

            ],
            cert: [
                {
                    name: 'Udacity',
                    img: './images/certificates/googleScholarship.png'
                },
                {
                    name: 'Udemy Bootcamp',
                    img: '/images/certificates/bootcampcert.png'
                },
                {
                    name: 'Udemy React',
                    img: '/images/certificates/reactcert.jpg'
                }
            ]
        }
    }
    render(){
        return (
            <div className="content-wrapper">

                <ContentHeader/>

                <div className="margin">
                    <hr/>
                    <div className="views-wrapper">


                        <Switch>
                            <Route exact path="/" render={(props) => (<WorkContainer {...props} work={this.state.work} />
                            )}/>
                            <Route path="/tools" render={(props) => (<ToolsContainer {...props} tools={this.state.tools} />
                            )} />
                            <Route path="/Certificates" render={(props) => (<CertificatesContainer {...props} cert={this.state.cert} />
                            )} />
                            {/*<Route path="/contact" component={ContactContainer}/> */}
                            <Route path="/guestlist" component={GuestListContainer}/>
                        </Switch>
                    </div>
                </div>

            </div>
        );
    }
}


export default PageContent;
