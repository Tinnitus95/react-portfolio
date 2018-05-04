import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


class SideNavOptions extends Component {
    render(){
        return (

            <ul className="pageNav">
                <li>
                    <NavLink className="nav-links" activeClassName="active-nav"  to="/">Work</NavLink>
                </li>
                <li>
                    <NavLink className="nav-links" activeClassName="active-nav" to="/tools">Tools</NavLink>
                </li>
                <li>
                    <NavLink className="nav-links" activeClassName="active-nav" to="/certificates">Certificates</NavLink>
                </li>
                {/* <li>
                    <Link to="/contact">Contact</Link>
                </li> */}

                {/* <li>
                    <NavLink className="nav-links" activeClassName="active-nav" to="/guestlist">Guestlist</NavLink>
                </li> */}

                {/* <Link >Work</Link>
                <Link >Tools</Link>
                <Link >Contact</Link>
                <Link >Guestlist</Link> */}

            </ul>

        );
    }
}

export default SideNavOptions;
