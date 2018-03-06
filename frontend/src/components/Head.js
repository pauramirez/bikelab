import React, {Component} from "react";
import { Link } from 'react-router-dom'

class Head extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessory1: {
                "name": " ",
                "brand":" ",
                "description":" ",
                "image":" ",
                "category":"",
                "id":""
            },
            accessory2: {
                "name": " ",
                "brand":" ",
                "description":" ",
                "image":" ",
                "category":" ",
                "id":""
            },
            accessory3: {
                "name": " ",
                "brand":" ",
                "description":" ",
                "image":" ",
                "category":" ",
                "id":""
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
                console.log(json[0]);
                this.setState({accessory1: json[0],accessory2: json[1],accessory3: json[2]});
            });
    }

    render() {
        return (
            <div className="container-head header">

                <div className="header-overlay">

                    <div className="row">
                        <div className=" col-md-12 header-text">
                            <div className="row row-centered">
                                <div className="col-md-8 col-xs-12">

                                    <div className="header-text">

                                        <h1>BikeLab</h1>
                                        <h4 className="head-text">Online marketplace for bike enthusiasts</h4>
                                    </div>

                                </div>

                                <div className="col-md-4 col-xs-12">

                                    <div className="header-photo text-center">

                                        <img className="main-photo" src="bike.png" alt="Main page logo"/>

                                    </div>

                                </div>

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
                                    <Link to={{pathname: `/accessories/${this.state.accessory1._id}`, state:{accessory: this.state.accessory1} }}>
                                        <img src={this.state.accessory1.image} alt={this.state.accessory1.name}/>

                                    <h3>{this.state.accessory1.name}</h3>
                                    <p>{this.state.accessory1.description}</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h5><i className="fa fa-bicycle" aria-hidden="true"></i> User's Favorite</h5>
                                <div className="box clearfix">
                                    <Link to={{pathname: `/accessories/${this.state.accessory2._id}`, state:{accessory: this.state.accessory2} }}>
                                        <img src={this.state.accessory2.image} alt={this.state.accessory2.name}/>

                                    <h3>{this.state.accessory2.name}</h3>
                                    <p>{this.state.accessory2.description}</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h5><i className="fa fa-bicycle" aria-hidden="true"></i> Top Seller</h5>
                                <div className="box clearfix">
                                    <Link to={{pathname: `/accessories/${this.state.accessory3.id}`, state:{accessory: this.state.accessory3} }}>
                                        <img src={this.state.accessory3.image} alt={this.state.accessory3.name}/>

                                    <h3>{this.state.accessory3.name}</h3>
                                    <p>{this.state.accessory3.description}</p>
                                    </Link>
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
