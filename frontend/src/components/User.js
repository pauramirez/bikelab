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
          <div className="container row small-up-2 medium-up-3 large-up-4" id = "User">
              <div className="medium-12 columns">
                  <h2>Bienvenido {this.state.name}</h2>
                  <div className="container">
                      <img src={this.state.img} alt={this.state.name}/>
                  </div>
              </div>
          </div>
        );
    }

}

export default User;