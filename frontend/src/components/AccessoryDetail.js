// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";
import request from "superagent";
// eslint-disable-next-line no-unused-vars
import {Redirect} from "react-router-dom";
import Accessories from "./Accessories.js";
// eslint-disable-next-line no-unused-vars
import {Route} from "react-router-dom";

class AccessoryDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      accessory: props.location.state.accessory,
      fname: "",
      comment: "",
      email: "",
      redirectToReferrer: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.state.accessory);
  }


  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("entra");
    // get our form data out of state
    const {fname, comment, email} = this.state;

    let postData = {
      usName: fname,
      usEmail: email,
      usComment: comment
    };
    let body = JSON.stringify(postData);
    request.post("/sendMail")
      .set("Content-Type", "application/json")
      .send(body)
      .end((err, res) => {
        console.log(res);
        alert("Message sent to seller");
        sessionStorage.setItem("sendMail", res);
        this.setState({redirectToReferrer: true});
      });
  }


  render() {

    if (this.state.redirectToReferrer) {
      this.setState({redirectToReferrer: false});
      return (
        <Redirect to={"/accessories"}/>
      );
    }
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h1>{this.state.accessory.name}</h1>
          </div>
          <div className="col-lg-8 ">

            <img className="img-detail" src={this.state.accessory.image} alt="im"/>

            <p>{this.state.accessory.description}</p>


            <div className="nutrition-facts clearfix">
              <h3>{this.state.accessory.description}</h3>
              <div>
                <p><strong>Price:</strong></p>
                <p>{this.state.accessory.price}
                </p>
              </div>
            </div>
            <div className="blog-comment">
              <hr/>
              <div className="reply">

                <h3>Contact the seller</h3>
                <form method="post" id="commentform" className="comment-form"
                  onSubmit={this.handleSubmit}>
                  <p className="comment-form-comment">
                    <textarea value={this.state.comment} onChange={this.handleChange}
                      className="form-control"
                      id="comment" name="comment" cols="45" rows="5"
                      aria-required="true" type="text"/>
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="comment-form-author">
                        <label >Name <span className="required">*</span>
                        </label>
                        <textarea className="form-control" onChange={this.handleChange}
                          id="author" name="fname" value={this.state.fname} size="30"
                          maxLength="245" aria-required="true" required="required"
                          type="text"/>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="comment-form-email">
                        <label >Email <span className="required">*</span>
                        </label>
                        <textarea onChange={this.handleChange} className="form-control"
                          id="email" name="email" value={this.state.email} size="30"
                          maxLength="100" aria-required="true" required="required"
                          type="text"/>
                      </p>
                    </div>
                  </div>
                  <p className="form-submit">
                    <input className="btn btn-submit btn-block" name="submit" id="submit"
                      value="Post Comment" style={divStyle} type="submit"/>
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
        <Route exact path="/accessories" component={Accessories}/>
      </div>
    );
  }
}

export default AccessoryDetail;

let
  divStyle = {
    backgroundColor: "#e13b2b",
    color: "white"
  };
