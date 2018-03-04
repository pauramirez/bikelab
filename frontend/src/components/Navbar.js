import React, {Component} from "react";

//var NavItem = require("./NavItem.js");

class NavBar extends Component {

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container-fluid justify-content-center">
                        <a className="navbar-brand" href="#">
                            <i className="fa fa-bicycle" aria-hidden="true"></i>
                            BikeLab
                        </a>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" role = "button" onClick = {this.props.navToHome}>{this.genNavAction("Home")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" role = "button" onClick = {this.props.navToAccesories}>{this.genNavAction("Accesories")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick = {this.props.navToAbout}>{this.genNavAction("About us")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.props.navToContact}>{this.genNavAction("Contact")}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }

    genNavAction(actionName)
    {
        const basicTag = (
            <div>
                <span className="navbar">{actionName}</span>
            </div>
        );
        return (
            <div>
                <span className="highlight-container">
                    <span className="highlight">
                        {basicTag}
                    </span>
                </span>
            </div>
        )
    }
}


export default NavBar;