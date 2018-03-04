import React, {Component} from 'react';
import Top from "./Top";
import Featured from "./Featured";

class Home extends Component{

    render(){
        return(
            <div>
                <Top/>
                <Featured/>
            </div>
        );
    }
}

export default Home;