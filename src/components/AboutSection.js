// src/pages/components/AboutSection.js
import React from 'react';

const AboutSection = () => {
    return (
        <section
            className="bg-primary-green"
            style={{
                backgroundColor: "#27533b !important",
            }}
            id="about"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-heading text-white">
                            TruBudget <br /> Trusted Public Expenditure Tool
                        </h2>
                        <center>
                            <hr className="light my-4" />
                        </center>

                        <p
                            style={{ fontSize: "1.15rem" }}
                            className="text-faded mb-4"
                        >
                            A collaborative workflow tool and secured platform to track
                            and coordinate the implementation of donor-funded investment
                            projects
                        </p>
                        <br />
                        <br />
                        <a
                            className="btn btn-light btn-xl js-scroll-trigger"
                            href="#services"
                        >
                            Get Started!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
