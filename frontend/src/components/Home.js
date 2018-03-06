/* eslint-disable no-unused-vars */
import React, {Component} from "react";
import Featured from "./Featured";
import User from "./User.js";
import Head from "./Head";

class Home extends Component{

  render(){
    return(
      <div>
        <User/>
        <Head/>
        <Featured/>
      </div>
    );
  }
}

export default Home;