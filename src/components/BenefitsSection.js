// src/pages/components/BenefitsSection.js
import React from 'react';

const BenefitItem = ({ icon, title, description }) => (
    <div className="benefit-item">
        <i className={`fa fa-${icon} fa-4x fa-newspaper-o text-primary-green mb-3 sr-icons`} />
        <h3 className="mb-3">{title}</h3>
        <p className="text-muted mb-0">{description}</p>
    </div>
);

const BenefitsSection = () => {
    return (
        <section className="bg-primary-green" style={{ backgroundColor: "#27533b !important" }} id="benefits">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-heading text-white">TruBudget saves money, time and helps to built trust</h2>
                        <br />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <BenefitItem
                            icon="diamond"
                            title="Increased Transparency"
                            description="Real-time project tracking and reporting"
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 text-center">
                        <BenefitItem
                            icon="newspaper-o"
                            title="Improved Efficiency"
                            description="Streamlined workflows and reduced paperwork"
                        />
                    </div>

                    {/* Add more BenefitItem components */}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
