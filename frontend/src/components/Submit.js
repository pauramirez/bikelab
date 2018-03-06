/* eslint-disable no-unused-vars */
import React, {Component} from "react";
import request from "superagent";
import { Redirect } from "react-router-dom";
import {Route} from "react-router-dom";
import Accessories from "./Accessories.js";

class Submit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };

    this.addAccessory = this.addAccessory.bind(this);
  }
  addAccessory(e){
    e.preventDefault();
    const body = JSON.stringify({
      name: this.refs.name.value,
      brand: this.refs.brand.value,
      image: "http://www.bikehouse.com.co/contenidos/images/ecommerce_productos/padrone-mas.jpg",
      category: this.refs.category.value,
      price: this.refs.price.value,
      description: this.refs.description.value
    });
    console.log(body);
    request
      .post("/addAccessory")
      .set("Content-Type", "application/json")
      .send(body)
      .end((err, res)=>{
        console.log(res);
        this.setState({redirectToReferrer: true});
      });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return (
        <Redirect to={"/accessories"}/>
      );
    }
    return (
      <div className="submit">
        <div className="title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Submit Accessory</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">

                <form onSubmit={this.addAccessory.bind(this)}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Accessory name</label>
                        <input name="name" ref="name" className="form-control" required type="text"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Brand</label>
                        <input name="brand" ref="brand" className="form-control" required type="text"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label> Category</label>
                        <select className="form-control js-search-category" name="category" ref="category" required data-placeholder="Choose Category" aria-hidden="true">
                          <option value="Other">Other</option>
                          <option value="Bike Locks">Bike Locks</option>
                          <option value="Bike Pumps">Bike Pumps</option>
                          <option value="Bike Mirrors">Bike Mirrors</option>
                          <option value="Bike Covers">Bike Covers</option>
                          <option value="Bike Bells">Bike Bells</option>
                          <option value="Lights & Reflectors">Lights & Reflectors</option>
                        </select>
                      </div>
                    </div>

                  </div>

                  <div className="form-group">
                    <label>Accessory price</label>
                    <input name="price" ref="price" className="form-control" required type="number"/>
                  </div>



                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" ref="description" rows="4" required="required"/>
                  </div>

                  <button type="submit" className="btn btn-submit">Submit Accessory</button>
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

export default Submit;
