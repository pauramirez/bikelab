import React, {Component} from "react";

class Foot extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <h5>About</h5>
                            <p>Nunc at augue gravida est fermentum vulputate. gravida est fermentum vulputate Pellentesque et ipsum in dui malesuada tempus.</p>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h5>Archive</h5>
                            <ul>
                                <li><a href="#">June 2017</a>
                                </li>
                                <li><a href="#">July 2017</a>
                                </li>
                                <li><a href="#">August 2017</a>
                                </li>
                                <li><a href="#">September 2017</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h5>Recipes</h5>
                            <ul>
                                <li><a href="#">Browse Recipes</a>
                                </li>
                                <li><a href="#">Recipe Page</a>
                                </li>
                                <li><a href="#">Submit Recipe</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h5>Newsletter</h5>
                            <form>
                                <div className="form-group">
                                    <input className="form-control" type="text"></input>
                                </div>
                                <button type="submit" className="btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Foot;
