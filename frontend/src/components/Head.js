import React, {Component} from "react";

class Head extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessory1: {
                "name": " ",
                "brand":" ",
                "description":" ",
                "image":" ",
                "category":" "
            },
            accessory2: {
                "name": " ",
                "brand":" ",
                "description":" ",
                "image":" ",
                "category":" "
            },
            accessory3: {
                "name": " ",
                "brand":" ",
                "description":" ",
                "image":" ",
                "category":" "
            }
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
                this.setState({accessory1: json[0],accessory2: json[1],accessory3: json[2]});
            });
    }

    render() {
        return (
            <div className="container-head">

                <div className="header-overlay">

                    <div className="row-centered">
                        <div className="col-md-8 col-xs-12">

                            <div className="header-text">

                                <h1>BikeLab</h1>

                            </div>

                        </div>

                        <div className="col-md-4 col-xs-12">

                            <div className="header-photo text-center">

                                <img className="main-photo" src="bike.png" alt="Main page image"/>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <h5><i className="fa fa-bicycle" aria-hidden="true"></i> Top New Accessory</h5>
                                <div className="box clearfix">
                                    <a href="">
                                        <img src={this.state.accessory1.image} alt=""/>
                                    </a>
                                    <h3><a href="">{this.state.accessory1.name}</a></h3>
                                    <p>{this.state.accessory1.description}</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h5><i className="fa fa-bicycle" aria-hidden="true"></i> User's Favorite</h5>
                                <div className="box clearfix">
                                    <a href="">
                                        <img src={this.state.accessory2.image} alt=""/>
                                    </a>
                                    <h3><a href="">{this.state.accessory2.name}</a></h3>
                                    <p>{this.state.accessory2.description}</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h5><i className="fa fa-bicycle" aria-hidden="true"></i> Top Seller</h5>
                                <div className="box clearfix">
                                    <a href="">
                                        <img src={this.state.accessory3.image} alt=""/>
                                    </a>
                                    <h3><a href="">{this.state.accessory3.name}</a></h3>
                                    <p>{this.state.accessory3.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Head;
