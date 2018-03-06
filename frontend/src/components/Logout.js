/* eslint-disable no-unused-vars */
import React, {Component} from "react";
import FacebookLogin, {GoogleLogout} from "react-facebook-login";
import {PostData} from "../Services/PostData.js";
import {Redirect} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import ReactTimeout from "react-timeout";
import NavBar from "./Navbar";


class Logout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      loginError: false
    };
    this.logout = this.logout.bind(this);
  }

  logout(type) {
    let postData;
    postData = {
      name: "",
      provider: "",
      email: "",
      provider_id: "",
      token: "",
      provider_pic: ""
    };
    if (postData) {
      postData = JSON.stringify(postData);
      console.log("prePostData: " + postData);
      PostData("signup", postData);
      setTimeout(()=>{
        console.log("After post: " + postData);
        sessionStorage.setItem("userData", postData);
        this.setState({redirectToReferrer: false});
        //sessionStorage.setItem("display", "false");
        this.props.display = "true";
      },0);

    }

  }

  render() {

    if (this.state.redirectToReferrer) {
      return (
        <Redirect to={"/"}/>
      );
    }
    const responseGoogle = () => {
      console.log("LogOut");
      this.logout("google");
    };
    const responseFacebook = () => {
      setTimeout(() => {
        console.log("LogOutFB");
        this.logout("facebook");
      }, 3000);

    };
    return (
      <div>
        <div className="container" style={{textAlign: "center", padding: "1em"}}>
          <div className="btn-group">
            <FacebookLogin
              appId="209550596295120"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              data-auto-logout-link={true}/>
          </div>
          <br/><br/>
          <div className="btn-group">
            <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={responseGoogle}
            >
            </GoogleLogout>
          </div>
          <br/><br/>
        </div>
        <Route exact path="/" component={Home}/>
      </div>);
  }
}

export default Logout;