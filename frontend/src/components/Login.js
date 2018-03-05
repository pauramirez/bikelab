import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {PostData} from "../Services/PostData.js";
import {Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import ReactTimeout from 'react-timeout'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            loginError: false
        }
        this.signup = this.signup.bind(this);
    }

    signup(res, type) {

        let postData;

        if (type === "facebook" && res.email) {
            postData = {
                name: res.name,
                provider: type,
                email: res.email,
                provider_id: res.id,
                token: res.accessToken,
                provider_pic: res.picture.data.url
            };
        }
        if (type === "google" && res.w3.U3) {
            postData = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            };
        }
        if (postData) {
            postData = JSON.stringify(postData);
            console.log("prePostData: " + postData);
            PostData("signup", postData);
            setTimeout(()=>{
                console.log("After post: " + postData);
                sessionStorage.setItem("userData", postData);
                this.setState({redirectToReferrer: true});
                sessionStorage.setItem("display", "false");
            },5000);

        }
}

render()
{

    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
        return (
            <Redirect to={"/"}/>
        );
    }
    const responseGoogle = (response) => {
        console.log(response);
        this.signup(response, "google");
    }
    const responseFacebook = (response) => {
        setTimeout(()=>{
            console.log(response);
            this.signup(response, "facebook");
        },3000);

    }
    return (
        <div>
            <div classNameName="container" style={{textAlign: "center", padding: "1em"}}>
                <div className="btn-group">
                    <FacebookLogin
                        appId="209550596295120"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={responseFacebook}/>
                </div>
                <br/><br/>
                <div className="btn-group">
                    <GoogleLogin
                        clientId="790268347843-8v1ab90153i7rn9om4rv35k36o8msuug.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </div>
                <br/><br/>
            </div>
            <Route exact path="/" component={Home}/>
        </div>);
}
}

export default Login;