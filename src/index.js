import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Main from './components/main';

import 'normalize.css/normalize.css';
import './styles/styles.css';


class App extends Component{
    render(){
        return (
                <BrowserRouter>
                    <Main/>
                </BrowserRouter>
        );
    }
}



ReactDOM.render(<App/>, document.getElementById('app'))
