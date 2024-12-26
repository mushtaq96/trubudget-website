import React from 'react';
import Background from '../../static/img/hero-section/Trubudget-Blured-Gradient.png';
import LeftScreenshot from '../../static/img/hero-section/Notifications.png';
import RightScreenshot from '../../static/img/hero-section/Workflow.png';
import PrimarySchool from '../../static/img/hero-section/PrimarySchool.png';
import TaskStatus from '../../static/img/hero-section/TaskStatus.png';
import BudgetDistribution from '../../static/img/hero-section/BudgetDistribution.png';

import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="">
            <div className="">
                <img src={Background} alt="Background" className="" />

            </div>

            <div className='leftScreenshot'>
                <img src={LeftScreenshot} alt="Feature 1" className="" />
            </div>

            <div className='primarySchool'>
                <img src={PrimarySchool} alt="primary school" />
            </div>

            <div className='taskStatus'>
                <img src={TaskStatus} alt="task status" />
            </div>

            <div className='budgetDistribution'>
                <img src={BudgetDistribution} alt="budget distribution" />
            </div>

            <div className='rightScreenshot'>
                <img src={RightScreenshot} alt="Feature 2" className="" />
            </div>

            <div className="">
                <div className="hero">
                    <h1 className="">
                        <span>Financing &amp;</span>
                        <br />
                        <span>managing made</span>
                        <br />
                        <span>smarter</span>
                    </h1>
                    <p className="mb-8">
                        Explore our app with spend limits, tracking, approval flows, and much more - boasting a huge success rate.
                    </p>
                    <button className="duration-300">
                        Tell me more
                    </button>
                </div>
            </div>


        </section>
    );
};

export default Hero;
