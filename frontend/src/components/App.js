/* eslint-disable no-unused-vars */
import React, {Component} from "react";
import NavBar from "./Navbar.js";
import Foot from "./Foot";
import Copyright from "./Copyright";


class App extends Component {

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
