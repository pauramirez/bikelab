import React, {Component} from "react";

class Submit extends Component {

    render() {
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
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Accessory name</label>
                                            <input name="name" className="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Brand</label>
                                            <input name="name" className="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label> Category</label>
                                            <select className="form-control js-search-category" name="category" data-placeholder="Choose Category" aria-hidden="true">
                                                <option value="1">Other</option>
                                                <option value="2">Bike Locks</option>
                                                <option value="3">Bike Pumps</option>
                                                <option value="4">Bike Mirrors</option>
                                                <option value="5">Bike Covers</option>
                                                <option value="6">Bike Bells</option>
                                                <option value="7">Lights & Reflectors</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Upload your photos</label>
                                            <input className="form-control-file" type="file"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Accessory price</label>
                                    <input name="price" className="form-control" type="number"/>
                                </div>



                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea className="form-control" rows="4" required="required"></textarea>
                                </div>

                                <button type="submit" className="btn btn-submit">Submit Accessory</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Submit;
