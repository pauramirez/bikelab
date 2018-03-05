import React, {Component} from "react";

class Copyright extends Component {
    render() {
        return (
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">Made with <i className="fa fa-heart" aria-hidden="true"> </i> by Carlos Penaloza & Camilo Montenegro — Copyright ©
                            2018 <a href="/">BikeLab</a>. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Copyright;
