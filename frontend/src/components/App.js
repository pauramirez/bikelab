import React, {Component} from "react";
import "../style.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessories:[]
        };
    }

    componentDidMount(){
        fetch("/dataAccessories")
        .then((res) => {
            if (res.status!=="200"){
                console.log("Error getting data");
            }
            return res.json();
        })
        .then((json) => {
            this.setState({accessories:json});
            
        });
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
            Wazza
            </p>
            {this.state.accessories.map(
                (data) => <div key = {data.name}>{data.name}</div>)}
                </div>

                );
    }
}

export default App;
