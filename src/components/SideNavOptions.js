import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SideNavOptions extends Component {
    render(){
        return (

            <ul>
                <li>
                    <Link to="/">Work</Link>
                </li>
                <li>
                    <Link to="/tools">Tools</Link>
                </li>
                <li>
                    <Link to="/certificates">Certificates</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <li>
                    <Link to="/guestlist">Guestlist</Link>
                </li>

                {/* <Link >Work</Link>
                <Link >Tools</Link>
                <Link >Contact</Link>
                <Link >Guestlist</Link> */}

            </ul>

        );
    }
}

export default SideNavOptions;
