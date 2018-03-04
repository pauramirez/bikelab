import React, {Component} from "react";
import "../style.css";
import Nav from './Nav';
import Accessories from './Accessories';
import Foot from './Foot';
import Copyright from "./Copyright";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessories: []
        };
    }

    componentDidMount() {
        fetch("/dataAccessories")
            .then((res) => {
                if (res.status !== "200") {
                    console.log("Error getting data");
                }
                return res.json();
            })
            .then((json) => {
                this.setState({accessories: json});

            });
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Nav/>
                    <Accessories/>
                </div>
                <Foot/>
                <Copyright/>
            </div>
        );
    }
}

export default App;
