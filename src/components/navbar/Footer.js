import React, { Component } from 'react';

const Footer = () => {
    return (
        <>
            <footer className="fixed-bottom">
                <div className="container" id="footer-top">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <div id="text-2" className="widget widget_text">
                                <h3 className="title">Common Links</h3>
                                <div className="textwidget">
                                    <p>
                                        <a href="/contact">Contact Us</a><br />
                                        <a href="/fitness-classes">Refer a Friend</a><br />
                                        <a href="/training">Tour Our Facility</a><br />
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div id="text-2" className="widget widget_text">
                                <h3 className="title">Deals</h3>
                                <div className="textwidget">

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div id="text-2" className="widget widget_text">
                                <h3 className="title">Where We Are</h3>
                                <div className="textwidget">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div id="footer-bottom">
                <h4>NEFFITNESS</h4>
            </div>

        </footer>
        </>
                        )
                    }

export default Footer;