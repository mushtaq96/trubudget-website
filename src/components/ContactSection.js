// src/pages/components/ContactSection.js
import React from 'react';

const ContactSection = () => {
    return (
        <section className="bg-primary-green" style={{ backgroundColor: "#27533b !important" }} id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Contact Us</h2>
                        <br />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button type="submit" className="btn btn-xl">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
