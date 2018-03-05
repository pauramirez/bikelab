import React, {Component} from 'react';
import Top from "./Top";
import Featured from "./Featured";
import Head from "./Head";

class Home extends Component{

    render(){
        return(
            <div>
                <Head/>
                <Featured/>
            </div>
        );
    }
}

export default Home;