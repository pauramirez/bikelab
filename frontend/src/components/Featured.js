import React, {Component} from 'react';

class Featured extends Component {

    render() {
        return (
            <div className="featured">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <h3>Accessory of the day</h3>
                        </div>
                        <div className="col-lg-8">
                            <div className="box grid recipes">
                                <div className="by"><i className="fa fa-user" aria-hidden="true"></i> Gerina Amy</div>
                                <a href="recipe-detail.html">
                                    <img src="images/recipe1.jpg" alt=""/>
                                </a>
                                <h2><a href="recipe-detail.html">Roast Chicken With Lemon Gravy</a></h2>
                                <p>Dapibus mattis a. Nec lacus nam. Volutpat molestie ipsum. Eu et fermentum malesuada
                                    et et lorem mauris aenean partur..</p>
                                <div className="tag">
                                    <a href="">Chicken</a>
                                    <a href="">Lemon</a>
                                    <a href="">Sayur</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;