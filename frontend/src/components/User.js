import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

class User extends Component{

    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer:false,
            name:"",
            email:""
        }
    }

    componentDidMount(){
        let data = JSON.parse(sessionStorage.getItem("userData"));
        console.log(data);
        if(data!==null) {
            this.state({name: data.userData.name});
            this.state({name: data.userData.email});
        }
    }

    render(){

        if(!sessionStorage.getItem("userData")){
            return(<Redirect to={"/login"}/>);
        }
        return(
          <div className="row small-up-2 medium-up-3 large-up-4" id = "Body">
              <div className="medium-12 columns">
                  <h2>Home {this.state.name}</h2>
                  <h2>Home {this.state.email}</h2>
              </div>
          </div>
        );
    }

}

export default User;