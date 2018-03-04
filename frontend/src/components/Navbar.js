import React, {Component} from "react";

import {NavLink} from 'react-router-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Accessories from './Accessories';
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Home from "./Home.js";
import Submit from "./Submit.js";
import AccessoryDetail from "./AccessoryDetail";


class NavBar extends Component {

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container-fluid justify-content-center">
                            <NavLink exact className="navbar-brand" to = "/home">
                                <i className="fa fa-bicycle" aria-hidden="true"></i>
                                BikeLab
                            </NavLink>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" to="/accessories">Accessories</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" to="/aboutUs">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link" to="/contactUs">Contact Us</NavLink>
                                    </li>
                                    <li className="nav-item btn-submit-recipe">
                                        <NavLink exact className="nav-link" to="/submit"><i className="fa fa-upload" aria-hidden="true"></i> Submit Accessory</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <br/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/accessories" component={Accessories}/>
                    <Route exact path="/aboutUs" component={AboutUs}/>
                    <Route exact path="/contactUs" component={ContactUs}/>
                    <Route exact path="/submit" component={Submit}/>
                    <Route exact path="/detail" component={AccessoryDetail}/>
                </div>
            </Router>

        )
    }
}


export default NavBar;