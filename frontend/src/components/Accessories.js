import React, {Component} from "react";

import SearchBar from './SearchBar';

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
                console.log(json);
                this.setState({accessories: json});

            });
    }

    renderEntry(pName, pBrand, pDescription, pCategory, pImage, pProvider, pPrice) {
        return <Entry name={pName} brand={pBrand} description={pDescription} category={pCategory} image={pImage} provider={pProvider} price={pPrice}/>;
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
                                            <select className="form-control js-search-category" name="category" data-placeholder="Choose Category" aria-hidden="true">
                                                <option value="1">All categories</option>
                                                <option value="2">Bike Locks</option>
                                                <option value="3">Bike Pumps</option>
                                                <option value="4">Bike Mirrors</option>
                                                <option value="5">Bike Covers</option>
                                                <option value="6">Bike Bells</option>
                                                <option value="7">Lights & Reflectors</option>
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
                                <h5><i className="fa fa-wrench" aria-hidden="true"></i>  Accessory List</h5>
                            </div>

                            {this.state.accessories.map(
                                (data) => this.renderEntry(data.name, data.brand, data.description, data.category, data.image, data.provider, data.price) ) }


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
            <div className="col-lg-4 col-sm-6" key={this.props.name}>
                <div className="box grid recipes">
                    <div className="by"><strong>{this.props.brand} </strong> {this.props.name} </div>
                    <a href="">
                        <figure>
                            <img className="img-accessory" src={this.props.image} alt={this.props.name + " picture"}/>
                        </figure>
                    </a>
                    <h2><a href="">{this.props.price}</a></h2>
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
