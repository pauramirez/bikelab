import React, {Component} from 'react';
import './App.css';

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

                    }
                )}
            </div>
        );
    }
}

export default App;
