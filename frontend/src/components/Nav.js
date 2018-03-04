import React, {Component} from "react";

class Nav extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div class="container-fluid justify-content-center">
                    <a class="navbar-brand" href="#"><i class="fa fa-bicycle" aria-hidden="true"></i>  BikeLab</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Accessories</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
