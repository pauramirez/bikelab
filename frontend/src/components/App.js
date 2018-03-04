import React, {Component} from "react";
import "../style.css";

import NavBar from "./Navbar.js"
import Foot from './Foot';
import Copyright from "./Copyright";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessories: []
        };
    }

    render() {
        return (<div>
            <div className="container-fluid">
                <NavBar/>
            </div>
            <Foot/>
            <Copyright/>
        </div>);
    }
}

export default App;
