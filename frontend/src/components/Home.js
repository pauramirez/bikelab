import React, {Component} from 'react';
import Top from "./Top";
import Featured from "./Featured";
import User from "./User.js";

class Home extends Component{

    render(){
        return(
            <div>
                <Top/>
                <User/>
                <Featured/>
            </div>
        );
    }
}

export default Home;