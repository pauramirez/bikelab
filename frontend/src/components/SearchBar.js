import React, {Component} from "react";

class SearchBar extends Component {

    render() {
        return (

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
        );
    }
}

export default SearchBar;
