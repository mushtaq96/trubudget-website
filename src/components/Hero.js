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
        <section className="hero relative w-full min-h-screen mx-auto mt-[114px] overflow-hidden">
            <div className="hero-mask-layer bg-black bg-opacity-50">
                <img src={Background} alt="Background" className="absolute inset-0 w-full h-full object-cover custom-triangle-mask" />

            </div>

            <div className='leftScreenshot'>
                <img src={LeftScreenshot} alt="Feature 1" className="absolute top-1/3 right-1/4 w-40 h-40 object-cover rounded-lg shadow-lg" />
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
                <img src={RightScreenshot} alt="Feature 2" className="absolute top-1/3 right-1/4 w-40 h-40 object-cover rounded-lg shadow-lg" />
            </div>

            <div className="hero-text z-10 mx-auto w-[558px] h-[352px]">
                <div className="hero-text flex flex-col items-center justify-center gap-6 text-center max-w-full">
                    <h1 className="text-5xl font-bold mb-4">
                        <span>Financing &amp;</span>
                        <br />
                        <span>managing made</span>
                        <br />
                        <span>smarter</span>
                    </h1>
                    <p className="max-w-md text-xl mb-8">
                        Explore our app with spend limits, tracking, approval flows, and much more - boasting a huge success rate.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
                        Tell me more
                    </button>
                </div>
            </div>


        </section>
    );
};

export default Hero;
