import React from 'react';
import Background from '../../static/img/hero-section/Trubudget-Blured-Gradient.png';
import Notifications from '../../static/img/hero-section/Notifications.png';
import Workflow from '../../static/img/hero-section/Workflow.png';
import PrimarySchool from '../../static/img/hero-section/PrimarySchool.png';
import TaskStatus from '../../static/img/hero-section/TaskStatus.png';
import BudgetDistribution from '../../static/img/hero-section/BudgetDistribution.png';
import TopBar from '../components/common/TopBar';
import { ChevronDown } from 'lucide-react';
import CustomNavbar from '../theme/Navbar';
import ArrowDownward from '../../static/img/hero-section/ArrowDownward.png';
import PrimarySchoolStatus from '../../static/img/hero-section/PrimarySchoolStatus.png';

const Hero = () => {
    return (
        <section className="hero-section">

            <img src={Background} alt="Blurred Gradient Background" className="hero-background" />

            <div className='hero-container'>
                <img src={PrimarySchool} alt="Primary School" className="hero-image primarySchool" />

                <div className='workflow-container'>
                    <TopBar />
                    <img src={Workflow} alt="Workflow" className="hero-image workflow" />
                </div>
                <div className="hero-content-container">
                    <h1 className="hero-title">
                        <span>Financing &amp;</span>
                        <br />
                        <span>managing made</span>
                        <br />
                        <span>smarter</span>
                    </h1>
                    <p className="hero-description">
                        Explore our app with spend limits, tracking, approval flows, and much more – boasting a huge success rate.
                    </p>
                    <button className="hero-button">
                        Tell me more <img src={ArrowDownward} alt="downward-icon" className="downward-icon" />
                    </button>
                </div>
                <div className='notifications-container'>
                    <TopBar />
                    <img src={Notifications} alt="Notifications" className="hero-image notifications" />
                </div>
                <img src={TaskStatus} alt="Task Status" className="hero-image taskStatus" />
                <img src={PrimarySchoolStatus} alt="Primary School Status" className="hero-image primarySchoolStatus" />
                <img src={BudgetDistribution} alt="Budget Distribution" className="hero-image budgetDistribution" />
            </div>

        </section >
    );
};

export default Hero;
