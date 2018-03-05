import React, {Component} from "react";
import request from "superagent";
import { Redirect } from 'react-router-dom'

class Submit extends Component {

    addAccessory=(e)=>{
        e.preventDefault();
        const body = JSON.stringify({
            name: this.refs.name.value,
            brand: this.refs.brand.value,
            image: "data:image/webp;base64,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",
            category: this.refs.category.value,
            price: this.refs.price.value,
            description: this.refs.description.value
        });
        console.log(body);
        request
            .post('/addAccessory')
            .set('Content-Type', 'application/json')
            .send(body)
            .end(function(err, res){
                console.log(res.text);
                return <Redirect to='/accessories'/>;
            });
    }

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
                                        <textarea className="form-control" ref="description" rows="4" required="required"></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-submit">Submit Accessory</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Submit;
