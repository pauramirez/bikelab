import React, {Component} from "react";
import "../public/stylesheets/style.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessories: []
        };
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
                    (list) => {
                        list.name;
                    }
                )}
            </div>
        );
    }
}

export default App;
