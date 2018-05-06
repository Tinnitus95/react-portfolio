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
                    alt: 'BI-dashboard',
                    text: 'Dashboard made as a schoolproject for HeadAgent',
                    link: 'https://irdashboard.surge.sh/',
                    github: 'https://github.com/Tinnitus95/IRecommend-BI-Dashboard'
                },
                {
                    name: 'Nest:R',
                    img: './images/nestr.png',
                    alt: 'geolocation game',
                    text: 'Mobile geolocation game where you fight over the control of nests in your hometown',
                    link: 'https://nestr.surge.sh/',
                    github: 'https://github.com/Tinnitus95/Game_Kiwi'
                },
                {
                    name: 'React Weather forecast',
                    img: './images/weatherapp.png',
                    alt: 'weatherapp',
                    text: 'App built on the openweathermap API',
                    link: '',
                    github: 'https://github.com/Tinnitus95/react_weather_app'
                },
                {
                    name: 'Indecision',
                    img: './images/indecision.png',
                    alt: 'online planner',
                    text: 'Minimalistic todolist in React',
                    link: 'http://off-indecision.surge.sh/',
                    github: 'https://github.com/Tinnitus95/react_todo_list'
                },
                {
                    name: 'Color Game',
                    img: './images/color_game.png',
                    alt: 'RGB-game',
                    text: 'Small game to learn RGB codes',
                    link: 'http://off-colorgame.surge.sh/',
                    github: 'https://github.com/Tinnitus95/color_game'
                },

                {
                    name: 'Snake LMS',
                    img: './images/snake.png',
                    alt: 'education platform',
                    text: 'The first project I made! Mostly here to show my journey',
                    link: '',
                    github: 'https://github.com/Tinnitus95/Team-Snake'
                },

            ],
            tools:[
                {
                    name: "HTML-5",
                    img: './images/badges/html.svg',
                    alt: 'html'
                },
                {
                    name: "CSS",
                    img: './images/badges/css.svg',
                    alt: 'css'
                },
                {
                    name: "JavaScript",
                    img: './images/badges/js.svg',
                    alt: 'js'
                },
                {
                    name: "Sass",
                    img: './images/badges/sass.svg',
                    alt: 'sass'
                },
                {
                    name: "React",
                    img: './images/badges/react.svg',
                    alt: 'react'
                },
                {
                    name: "Redux",
                    img: './images/badges/redux.svg',
                    alt: 'redux'
                },
                {
                    name: "Node",
                    img: './images/badges/node.svg',
                    alt: 'node'
                },
                {
                    name: "MongoDB",
                    img: './images/badges/mongoDB.svg',
                    alt: 'mongo'
                },

            ],
            cert: [
                {
                    name: 'Udacity',
                    img: './images/certificates/googleScholarship.png',
                    alt: 'Udacity scholarship'
                },
                {
                    name: 'Udemy Bootcamp',
                    img: '/images/certificates/bootcampcert.png',
                    alt: 'Udemy bootcamp'
                },
                {
                    name: 'Udemy React',
                    img: '/images/certificates/reactcert.jpg',
                    alt: 'Udemy react'
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
                    <main className="views-wrapper">


                        <Switch>
                            <Route exact path="/" render={(props) => (<WorkContainer {...props} work={this.state.work} />
                            )}/>
                            <Route path="/tools" render={(props) => (<ToolsContainer {...props} tools={this.state.tools} />
                            )} />
                            <Route path="/Certificates" render={(props) => (<CertificatesContainer {...props} cert={this.state.cert} />
                            )} />
                            {/*<Route path="/contact" component={ContactContainer}/> */}
                            {/* <Route path="/guestlist" component={GuestListContainer}/> */}
                        </Switch>
                    </main>
                </div>

            </div>
        );
    }
}


export default PageContent;
