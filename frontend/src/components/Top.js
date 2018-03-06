import React, {Component} from "react";

class Top extends Component {

  render() {
    return (
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5><i className="fa fa-bicycle" aria-hidden="true"/> Top Breakfast Recipes</h5>
              <div className="box clearfix">
                <a href="">
                  <img src="" alt=""/>
                </a>
                <h3><a href="recipe-detail.html">Cinnamon Baked Doughnuts</a></h3>
                <p>Lorem ipsum dolor sit amet, adipiscing elit...</p>
              </div>
            </div>
            <div className="col-lg-4">
              <h5><i className="fa fa-bicycle" aria-hidden="true"/> Top Lunch Recipes</h5>
              <div className="box clearfix">
                <a href="">
                  <img src="" alt=""/>
                </a>
                <h3><a href="">Fruit Mix With Lemon Gravy</a></h3>
                <p>Lorem ipsum dolor sit amet, adipiscing elit...</p>
              </div>
            </div>
            <div className="col-lg-4">
              <h5><i className="fa fa-bicycle" aria-hidden="true"/> Top Dinner Recipes</h5>
              <div className="box clearfix">
                <a href="">
                  <img src="" alt=""/>
                </a>
                <h3><a href="">Red Cilly Sauce Cheese</a></h3>
                <p>Lorem ipsum dolor sit amet, adipiscing elit...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Top;