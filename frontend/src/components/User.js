import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

class User extends Component{

    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer:false,
            name:"",
            email:"",
            img:""
        }
    }

    componentDidMount(){
        let data = JSON.parse(sessionStorage.getItem("userData"));
        console.log(data);
        if(data!==null) {
            this.setState({name: data.name});
            this.setState({email: data.email});
            this.setState({img: data.provider_pic});
        }
    }

    render(){

        /**if(!sessionStorage.getItem("userData")){
            return(<Redirect to={"/login"}/>);
        }**/
        return(
          <div className="container" id = "User" style = {{textAlign:"center", padding:"1em"}}>
                  <h2>Welcome to your Lab, Bikelab!</h2>
                      <h3>{this.state.name}</h3>
                  <div className="container">
                      <img src={this.state.img} alt={this.state.name} style={{"border-radius": "50%", "horizontal-align":"center"}}/>
                  </div>
          </div>
        );
    }

}

export default User;