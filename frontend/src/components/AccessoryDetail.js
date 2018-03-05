import React, {Component} from 'react';

class AccessoryDetail extends Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.state={
            accessory:props.location.state.accessory
        }
        console.log(this.state.accessory);
    }


    render(){
        return(
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
                                        <form method="post" id="commentform" className="comment-form">
                                            <p className="comment-form-comment">
                                                <textarea className="form-control" id="comment" name="comment" cols="45" rows="5" aria-required="true"></textarea>
                                            </p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="comment-form-author">
                                                        <label htmlFor="author">Name <span className="required">*</span>
                                                        </label>
                                                        <input className="form-control" id="author" name="author" value="" size="30" maxLength="245" aria-required="true" required="required" type="text"/>
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="comment-form-email">
                                                        <label htmlFor="email">Email <span className="required">*</span>
                                                        </label>
                                                        <input className="form-control" id="email" name="email" value="" size="30" maxLength="100" aria-required="true" required="required" type="text"/>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="form-submit">
                                                <input className="btn btn-submit btn-block" name="submit" id="submit" value="Post Comment" style={divStyle} type="submit"/>
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

var divStyle = {
    backgroundColor:"#e13b2b",
    color: "white"
};