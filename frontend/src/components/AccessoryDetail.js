import React, {Component} from 'react';
import "../style.css";

class AccessoryDetail extends Component{

    render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <h1>Roast Chicken With Lemon Gravy</h1>
                    </div>
                    <div className="col-lg-8">


                        <img src="" alt=""/>

                            <p>Lorem ipsum dolor sit amet, usu eu vocibus laboramus appellantur, pro no natum ullum omittam. Mei vitae utinam complectitur eu. Te usu cibo vulputate. Id propriae adipisci pro. Legere nominati ut mel, natum libris at vix.</p>

                            



                            <div className="nutrition-facts clearfix">
                                <h3>Nutrition Facts</h3>
                                <div>
                                    <p>Calories:</p>
                                    <p><strong>632 kcal</strong>
                                    </p>
                                </div>
                                <div>
                                    <p>Carbohydrate:</p>
                                    <p><strong>37 g</strong>
                                    </p>
                                </div>
                                <div>
                                    <p>Fat:</p>
                                    <p><strong>92 g</strong>
                                    </p>
                                </div>
                                <div>
                                    <p>Protein:</p>
                                    <p><strong>63 g</strong>
                                    </p>
                                </div>
                                <div>
                                    <p>Cholesterol:</p>
                                    <p><strong>0 mg</strong>
                                    </p>
                                </div>

                            </div>


                            <div className="blog-comment">
                                <hr/>
                                    <div className="reply">
                                        <h3>Leave a Reply</h3>
                                        <form method="post" id="commentform" className="comment-form">
                                            <p className="comment-form-comment">
                                                <textarea className="form-control" id="comment" name="comment" cols="45" rows="5" aria-required="true"></textarea>
                                            </p>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p className="comment-form-author">
                                                        <label htmlFor="author">Name <span className="required">*</span>
                                                        </label>
                                                        <input className="form-control" id="author" name="author" value="" size="30" maxLength="245" aria-required="true" required="required" type="text"/>
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p className="comment-form-email">
                                                        <label htmlFor="email">Email <span className="required">*</span>
                                                        </label>
                                                        <input className="form-control" id="email" name="email" value="" size="30" maxLength="100" aria-required="true" required="required" type="text"/>
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p className="comment-form-url">
                                                        <label htmlFor="url">Website</label>
                                                        <input className="form-control" id="url" name="url" value="" size="30" maxLength="200" type="text"/>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="form-submit">
                                                <input className="btn btn-submit btn-block" name="submit" id="submit" value="Post Comment" type="submit"/>
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