import React, {Component} from 'react';

class AboutUs extends Component{

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-lg-12 title text-center">
                    <h4>Oct 30, 2017</h4>
                    <h1>Typography</h1>
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
                            tellus.</p>

                        <h1>H1 Header</h1>
                        <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula
                            elementum sed sit amet dui.</p>

                        <h2>H2 Header</h2>
                        <h3>H3 Header</h3>
                        <h4>H4 Header</h4>
                        <h5>H5 Header</h5>
                        <h6>H6 Header</h6>

                        <h3>Attached images</h3>
                        <p>Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id
                            enim.
                        </p>
                        <div className="alignleft">
                            <img src="images/recipe-img1.jpg" alt=""/>
                            <p className="caption-text">
                                Align left
                            </p>
                        </div>

                        <p>Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra
                            azuki bean corn fava bean mustard tigernut jcama green bean celtuce collard
                            greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet
                            watercress potato
                            tigernut corn groundnut.
                        </p>
                        <div className="alignright">
                            <img src="images/recipe-img2.jpg" alt=""/>
                            <p className="caption-text">Align right
                            </p>
                        </div>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                            Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
                            ligula. Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui
                            posuere
                            blandit. Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget
                            consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum
                            porta. Nulla quis lorem ut libero malesuada feugiat.
                        </p>
                        <p>Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor
                            volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo
                            eget
                            malesuada. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit
                            amet quam vehicula elementum sed sit amet dui.
                        </p>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum
                            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                            Curabitur
                            non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat,
                            accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Vivamus
                            magna justo, lacinia eget consectetur sed, convallis at tellus. Donec
                            sollicitudin
                            molestie malesuada.
                        </p>

                        <div className="aligncenter">
                            <img src="images/recipe-img3.jpg" alt=""/>
                            <p className="caption-text">
                                Align center
                            </p>
                        </div>
                        <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla
                            sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero
                            malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit
                            amet dui.
                        </p>
                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec
                            sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor
                            volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non
                            nisi.
                        </p>
                        <p>Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.
                            Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit.
                        </p>
                </div>
            </div>
    );
    }
    }

    export default AboutUs;