import React, {Component} from 'react';

class AccessoryDetail extends Component{



    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <h1>name</h1>
                    </div>
                    <div className="col-lg-8">

                        <img src="" alt="im"/>

                            <p>Lorem ipsum dolor sit amet, usu eu vocibus laboramus appellantur, pro no natum ullum omittam. Mei vitae utinam complectitur eu. Te usu cibo vulputate. Id propriae adipisci pro. Legere nominati ut mel, natum libris at vix.</p>


                            <div className="nutrition-facts clearfix">
                                <h3>More information</h3>
                                <div>
                                    <p><strong>Price:</strong></p>
                                    <p>200.000
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