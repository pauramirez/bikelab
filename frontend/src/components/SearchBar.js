import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

    }

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
                                        <select className="js-search-category form-control select2-hidden-accessible" name="category" data-placeholder="Choose Category" aria-hidden="true">
                                            <option value="1">All</option>
                                            <option value="2">Breakfast</option>
                                            <option value="3">Lunch</option>
                                            <option value="4">Beverages</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="form-group">
                                        <label>Select one or more of your favorite brands</label>
                                        <select className="js-search-ingredients form-control select2-hidden-accessible" name="ingredients[]" multiple="" data-placeholder="Included Brands"  aria-hidden="true">
                                            <option value="sugar">sugar</option>
                                            <option value="wheat-flour">wheat flour</option>
                                            <option value="baking-powder">baking powder</option>
                                            <option value="eggs">eggs</option>
                                            <option value="salt">salt</option>
                                            <option value="brown-sugar">brown sugar</option>
                                            <option value="chicken-breast">chicken breast</option>
                                            <option value="garlic">garlic</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Search by Keyword" type="email"/>
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
