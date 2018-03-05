import React, {Component} from 'react';
import Featured from "./Featured";
import User from "./User.js";
import Head from "./Head";

class Home extends Component{

    render(){
        return(
            <div>
                <Head/>
                <User/>
                <Featured/>
            </div>
        );
    }
}

export default Home;