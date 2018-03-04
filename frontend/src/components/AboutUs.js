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
                            <h3>Unordered List</h3>
                            <p>Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Nulla quis
                                lorem ut libero malesuada feugiat.</p>
                            <ul>
                                <li>Donec sollicitudin molestie malesuada. Proin eget tortor risus.</li>
                                <li>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit,
                                    eget tincidunt nibh pulvinar a.
                                </li>
                                <li>Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus
                                    convallis quis ac lectus.
                                </li>
                            </ul>
                            <h3>Ordered List</h3>
                            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis
                                a pellentesque nec, egestas non nisi.</p>
                            <ol>
                                <li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</li>
                                <li>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</li>
                                <li>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</li>
                                <li>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                    Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                </li>
                            </ol>
                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed
                                magna dictum porta. Donec sollicitudin molestie malesuada.</p>
                            <h3>Blockquote</h3>
                            <p>Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                            <blockquote className="blockquote">
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                    erat a ante.</p>
                                <p className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                                    Title</cite>
                                </p>
                            </blockquote>
                            <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor
                                accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at
                                tellus.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;