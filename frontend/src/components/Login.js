import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {PostData} from "../Services/PostData.js";
import {Redirect} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }
        this.signup = this.signup.bind(this);
    }

    signup(res, type) {

        let postData;

        if(type === "facebook" && res.email){
            
        }
        if(type === "google" && res.W3.U3){

        }
        PostData("signup", postData).then((result) =>
        {
            let responseJson = result;
            if (responseJson.userData) {
                sessionStorage.setItem("userData", JSON.stringify(responseJson));
                this.setState({redirectToReferrer: true});
            }
        }
    );

    }

    render() {

        if(this.state.redirectToReferrer){
            return(
                <Redirect to = {"/home"}/>
            )
        }
        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, "facebook");
        }
        const responseFacebook = (response) => {
            console.log(response);
            this.signup(response, "google");
        }
        return (
            <div>
                <div classNameName="container" style={{textAlign: "center", padding: "1em"}}>
                    <div className="btn-group">
                        <FacebookLogin
                            appId="209550596295120"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook}/>,
                        <a className='btn btn-danger disabled'><i className="fa fa-google-plus"
                                                                  style={{width: "16px", height: "20px"}}></i></a>
                        <a className='btn btn-danger' href='' style={{width: "12em;"}}> Sign in with Google</a>
                    </div>
                    <br/><br/>
                    <div className="btn-group">
                        <GoogleLogin
                            clientId="790268347843-8v1ab90153i7rn9om4rv35k36o8msuug.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                        />,
                        <a className='btn btn-primary disabled'><i className="fa fa-facebook"
                                                                   style={{width: "16px", height: "20px"}}></i></a>
                        <a className='btn btn-primary ' href='' style={{width: "12em"}}> Sign in with Facebook</a>
                    </div>
                    <br/><br/>
                </div>
            </div>);
    }
}

export default Login;