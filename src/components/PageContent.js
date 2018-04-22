import React, {Component} from 'react';
import ContentHeader from './ContentHeader';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ContactContainer from './views/ContactContainer';
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
                github: 'https://github.com/Tinnitus95/IRecommend-BI-Dashboard'
            },
            {
                name: 'Nest:R',
                img: './images/nestr.png',
                text: 'Mobile geolocation game where you fight over the control of nests in your hometown',
                github: 'https://github.com/Tinnitus95/Game_Kiwi'
            },
            {
                name: 'React Weather forecast',
                img: './images/weatherapp.png',
                text: 'App built on the openweathermap API',
                github: 'https://github.com/Tinnitus95/react_weather_app'
            }

            ],
            tools:[
                {
                    name: "HTML-5",
                    img: './images/badges/html.svg',
                    text: 'blaklskdladkalskqwlkeqw'
                }
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
                        <Switch>
                            <Route exact path="/" render={(props) => (<WorkContainer {...props} work={this.state.work} />
                            )}/>
                            <Route path="/tools" render={(props) => (<ToolsContainer {...props} tools={this.state.tools} />
                            )} />
                            <Route path="/Certificates" render={(props) => (<CertificatesContainer {...props} cert={this.state.cert} />
                            )} />
                            <Route path="/contact" component={ContactContainer}/>
                            <Route path="/guestlist" component={GuestListContainer}/>
                        </Switch>
                    </div>

            </div>
        );
    }
}


export default PageContent;
