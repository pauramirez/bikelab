/* eslint-disable no-unused-vars */
import React, {Component} from "react";


import { Link } from "react-router-dom";


class Accessories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessories: []
    };
  }

  componentDidMount() {
    fetch("/dataAccessories")
      .then((res) => {
        if (res.status !== 200) {
          console.log("Error getting data");
        }
        return res.json();
      })
      .then((json) => {
        this.setState({accessories: json});

      });
  }

  renderEntry(pId, pName, pBrand, pDescription, pCategory, pImage, pProvider, pPrice) {
    return <Entry key={pId} id={pId} name={pName} brand={pBrand} description={pDescription} category={pCategory} image={pImage}
      provider={pProvider} price={pPrice}/>;
  }

  render() {
    return (
      <div>
        <div className="search">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Browse Accessories</h2>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Choose category</label>
                      <select className="form-control js-search-category" name="category"
                        data-placeholder="Choose Category" aria-hidden="true">
                        <option value="">All categories</option>
                        <option value="Bike Locks">Bike Locks</option>
                        <option value="Bike Pumps">Bike Pumps</option>
                        <option value="Bike Mirrors">Bike Mirrors</option>
                        <option value="Bike Covers">Bike Covers</option>
                        <option value="Bike Bells">Bike Bells</option>
                        <option value="Lights & Reflectors">Lights & Reflectors</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <label>Search by Keyword</label>
                    <div className="form-group">
                      <input className="form-control" placeholder="" type="text"/>
                      <button type="submit" className="btn">Search Accessories</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="list">

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h5><i className="fa fa-wrench" aria-hidden="true"/> Accessory List</h5>
              </div>

              {this.state.accessories.map(
                (data) => this.renderEntry(data._id, data.name, data.brand, data.description, data.category, data.image, data.provider, data.price))}


              <div className="col-lg-12 text-center">
                <a href="" className="btn btn-load">Load More</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

class Entry extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-sm-6">
        <div className="box grid recipes">
          <div className="by"><strong>{this.props.brand} </strong> {this.props.name} </div>
          <Link to={{pathname: `/accessories/${this.props.id}`, state:{accessory: this.props} }}>
            <figure>
              <img className="img-accessory" src={this.props.image} alt={this.props.name + " picture"}/>
            </figure>
          </Link>
          <h2>{this.props.price}</h2>
          <div className="description">
            <p>{this.props.description}</p>
          </div>

          <div className="tag">
            <a href="">{this.props.category}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Accessories;
