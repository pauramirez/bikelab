import React, {Component} from 'react';

class ContactUs extends Component{

    render(){
        return(
            <div className="page contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 title text-center">
                            <h1>Contact</h1>
                        </div>
                        <div className="col-lg-8 content">
                            <form >
                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input className="form-control" type="email"/>
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input className="form-control" type="text"/>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" rows="4" required="required"></textarea>
                                </div>
                                <button type="submit" className="btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;