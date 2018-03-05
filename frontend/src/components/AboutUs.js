import React, {Component} from 'react';

class AboutUs extends Component {

    render() {
        return (
            <div className="page contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 title text-center">
                            <h1>About Us</h1>
                        </div>
                        <div className="col-lg-8 content">
                            <h3>About BikeLab</h3>
                            <p>We are an online marketplace that seeks to provide bike lovers a space to buy, sell and share. Here you can:</p>
                            <ul>
                                <li>Find cycling accessories that you need</li>
                                <li>Discover new places to buy your accessories
                                </li>
                                <li>Share your knowledge with other bike enthusiasts
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;