import React, {Component} from "react";

class Copyright extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">Made with <i class="fa fa-heart" aria-hidden="true"></i> — Copyright ©
                            2018 <a href="/">BikeLab</a>. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Copyright;
