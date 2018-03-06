import React, {Component} from 'react';
import request from "superagent";
import {Redirect} from 'react-router-dom'

class AccessoryDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            accessory: props.location.state.accessory,
            fname: '',
            comment: '',
            email: '',

        }
        console.log(this.state.accessory);
    }


    onSubmit(e) {
        console.log("entra");
        e.preventDefault();
        // get our form data out of state
        const {fname, comment, email} = this.state;

        let postData = {
            usName: fname,
            usEmail: email,
            usComment: comment
        }
        let body = JSON.stringify(postData);
        request.post("/sendMail")
            .set('Content-Type', 'application/json')
            .send(body)
            .end(function (err, res) {
                console.log(res.text);
                alert("Message sent to seller");
                return <Redirect to='/accessories'/>;
            });
    }


    render() {
        const {fname, comment, email} = this.state;
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
                                      onSubmit={this.onSubmit.bind(this)}>
                                    <p className="comment-form-comment">
                                        <textarea value={comment} onChange={this.onChange} className="form-control"
                                               id="comment" name="comment" cols="45" rows="5"
                                               aria-required="true" type="text"/>
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="comment-form-author">
                                                <label htmlFor="author">Name <span className="required">*</span>
                                                </label>
                                                <textarea className="form-control"
                                                       id="author" name="author" value={fname} size="30"
                                                       maxLength="245" aria-required="true" required="required"
                                                       type="text"/>
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="comment-form-email">
                                                <label htmlFor="email">Email <span className="required">*</span>
                                                </label>
                                                <textarea onChange={this.onChange} className="form-control"
                                                       id="email" name="email" value={email} size="30"
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
            </div>
        );
    }
}

export default AccessoryDetail;

var
    divStyle = {
        backgroundColor: "#e13b2b",
        color: "white"
    };
