import React, {Component} from 'react';

class Featured extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessory: {
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
                this.setState({accessory: json[0]});
            });
    }

    render() {
        return (
            <div key={this.state.accessory.name} className="featured">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <h3>Accessory of the day</h3>
                        </div>
                        <div className="col-lg-8">
                            <div className="box grid recipes">
                                <div className="by"> {this.state.accessory.brand} </div>
                                <a href="recipe-detail.html">
                                    <img src={this.state.accessory.image} alt={this.state.accessory.name}/>
                                </a>
                                <h2>{this.state.accessory.name}</h2>
                                <p>{this.state.accessory.description}</p>
                                <div className="tag"><a href="">{this.state.accessory.category}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Featured;